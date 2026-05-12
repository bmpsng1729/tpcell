import React, { useEffect, useMemo, useState } from "react";

const LS_KEY = "oaEvents";

function formatDateKey(date) {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

function getTodayKey() {
  return formatDateKey(new Date());
}

function cleanupOldEvents(eventsObj) {
  const todayKey = getTodayKey();
  const cleaned = {};

  Object.entries(eventsObj || {}).forEach(([dateKey, value]) => {
    if (dateKey >= todayKey) {
      cleaned[dateKey] = value;
    }
  });

  return cleaned;
}

function MarkedDate() {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  // ✅ Load from localStorage in the initializer so data is there on first render
  const [events, setEvents] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return cleanupOldEvents(parsed); // keep today & future, drop past
    } catch (e) {
      console.error("Error reading OA events from localStorage", e);
      return {};
    }
  });

  const [selectedDate, setSelectedDate] = useState(getTodayKey());
  const [note, setNote] = useState("");

  // ✅ Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(events));
  }, [events]);

  // Update note when selectedDate changes
  useEffect(() => {
    setNote(events[selectedDate]?.message || "");
  }, [selectedDate, events]);

  const daysMatrix = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const firstWeekday = firstDay.getDay(); // 0 (Sun) - 6 (Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells = [];

    // Leading blanks
    for (let i = 0; i < firstWeekday; i++) {
      cells.push(null);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(new Date(year, month, day));
    }

    return cells;
  }, [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleDateClick = (dateObj) => {
    if (!dateObj) return;
    const key = formatDateKey(dateObj);
    setSelectedDate(key);
  };

  const handleSave = () => {
    if (!selectedDate) return;

    // Clean old events whenever we add/update something
    setEvents((prev) => {
      const cleaned = cleanupOldEvents(prev);
      return {
        ...cleaned,
        [selectedDate]: {
          message: note || "",
        },
      };
    });
  };

  const handleDelete = () => {
    if (!selectedDate) return;
    setEvents((prev) => {
      const { [selectedDate]: _, ...rest } = prev;
      return rest;
    });
    setNote("");
  };

  const monthLabel = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const todayKey = getTodayKey();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8">

        {/* Calendar section */}
        <div className="lg:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
            >
              ◀
            </button>
            <h2 className="text-xl font-semibold text-gray-800">{monthLabel}</h2>
            <button
              onClick={handleNextMonth}
              className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
            >
              ▶
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="py-1">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm">
            {daysMatrix.map((dateObj, idx) => {
              if (!dateObj) {
                return <div key={idx} className="h-10" />;
              }

              const key = formatDateKey(dateObj);
              const isToday = key === todayKey;
              const hasEvent = Boolean(events[key]);
              const isSelected = key === selectedDate;

              let baseClasses =
                "h-10 flex items-center justify-center rounded-lg border cursor-pointer transition-all";

              let colorClasses = "border-gray-200 bg-white hover:bg-gray-50";

              if (hasEvent) {
                colorClasses = "border-green-400 bg-green-100 text-green-900 hover:bg-green-200";
              }

              if (isToday) {
                colorClasses = "border-blue-400 bg-blue-50 text-blue-800 hover:bg-blue-100";
              }

              if (isSelected) {
                colorClasses = "border-indigo-500 bg-indigo-100 text-indigo-900 shadow-sm";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleDateClick(dateObj)}
                  className={`${baseClasses} ${colorClasses} text-sm`}
                >
                  {dateObj.getDate()}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-xs text-gray-500">
            <span className="inline-flex items-center mr-4">
              <span className="w-3 h-3 rounded-sm bg-blue-200 border border-blue-400 mr-1" /> Today
            </span>
            <span className="inline-flex items-center mr-4">
              <span className="w-3 h-3 rounded-sm bg-green-200 border border-green-400 mr-1" /> Has
              OA
            </span>
            <span className="inline-flex items-center">
              <span className="w-3 h-3 rounded-sm bg-indigo-200 border border-indigo-500 mr-1" />{" "}
              Selected
            </span>
          </p>
        </div>

        {/* Detail / form section */}
        <div className="lg:w-1/2 flex flex-col">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Oral Assessment Details
          </h3>

          <div className="mb-3">
            <p className="text-sm text-gray-600">
              Selected date:{" "}
              <span className="font-medium text-gray-900">{selectedDate}</span>
            </p>
            {events[selectedDate] && (
              <p className="text-xs text-green-700 mt-1">
                ✔ OA already scheduled for this date.
              </p>
            )}
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message / Notes
          </label>
          <textarea
            rows={6}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Example: OA for DBMS viva, panel: XYZ sir, bring notebook and ID card."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                       resize-none"
          />

          <div className="mt-4 flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-semibold
                         hover:bg-indigo-700 active:scale-95 transition-all duration-150"
            >
              Save / Update OA
            </button>

            <button
              onClick={handleDelete}
              className="flex-1 bg-red-50 text-red-600 py-2.5 rounded-lg text-sm font-semibold
                         border border-red-200 hover:bg-red-100 active:scale-95 transition-all duration-150"
            >
              Delete OA
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Old OA dates (before today) are automatically removed from local storage whenever you
            save a new OA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarkedDate;
