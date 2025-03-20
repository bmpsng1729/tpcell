import React, { useState } from "react";

const Dirmessage = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(true);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const fullText = `It is a matter of great pride and privilege for me to be the Director of NIT Jamshedpur, the premier institute of higher learning in the country. National Institute of Technology Jamshedpur, earlier known as Regional Institute of Technology was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar in the chain of REC's (Regional Engineering College) in India with the aim to generate technical graduates of highest standards who could provide technological leadership to the region.It is a matter of great pride and privilege for me to be the Director of NIT Jamshedpur, the premier institute of higher learning in the country. National Institute of Technology Jamshedpur, earlier known as Regional Institute of Technology was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar in the chain of REC's (Regional Engineering College) in India with the aim to generate technical graduates of highest standards who could provide technological leadership to the region.`;

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
      <div className="md:w-1/3">
        <img
          src="https://www.nitjsr.ac.in/static/media/director.5dd2bd73bde93718a6fd.jpg"
          alt="Director"
          className="rounded-lg"
        />
      </div>
      <div className="md:w-2/3 md:pl-6">
        <h1 className="text-xl font-bold mb-2">Director's Message</h1>
        <p className="mb-4">
          {showFullText ? fullText : truncateText(fullText, 100)}
        </p>
        {!showFullText && (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            onClick={handleReadMore}
          >
           know more

          </button>
        )}
        <p className="mt-4 font-semibold">Prof. Goutam Sutradhar
       </p>
         <p>  Director</p>
      </div>
    </div>
  );
};

export default Dirmessage;