import React from "react";

const CompanyDetailsPage = () => {
  const companyDetails = {
    name: "Tech Corp",
    logo: "https://via.placeholder.com/100",
    visitingSince: 2022,
    companyName: "Tech Corp Pvt Ltd",
    email: "info@techcorp.com",
    impTopic: "AI & Machine Learning",
    oralAssessment: "The oral assessment at Tech Corp involves a mix of behavioral and technical questions. Candidates can expect questions related to past work experiences, problem-solving approaches, and system design principles. The interviewer may also explore cultural fit by assessing teamwork abilities, leadership qualities, and conflict resolution skills. Additionally, candidates might be asked about the latest trends in technology and their opinions on industry challenges. Preparing well-structured responses and practicing mock interviews can help in performing better.",
    codingRound: "The coding round at Tech Corp consists of algorithmic and data structure problems designed to test problem-solving skills. Candidates may encounter challenges involving arrays, strings, trees, graphs, and dynamic programming. Time complexity and code optimization are key factors in evaluation. The problems are typically of medium to high difficulty, similar to LeetCode's 'Medium' or 'Hard' level. A strong understanding of recursion, greedy algorithms, and bit manipulation can be beneficial in tackling these challenges effectively.",
    preparationTips: "To prepare for Tech Corp's interview process, start by practicing coding problems regularly on platforms like LeetCode and Codeforces. Focus on time complexity, optimal solutions, and debugging strategies. For the oral assessment, develop clear communication skills and structure your responses using the STAR method (Situation, Task, Action, Result). Additionally, study system design principles and practice explaining technical concepts concisely. Mock interviews with peers or using online platforms can significantly enhance confidence and performance. Staying updated with industry trends can also be beneficial."
  };

  return (
    <div className="w-full min-h-screen p-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">{companyDetails.name}</h1>
      <div className="flex justify-center mb-6">
        <img
          src={companyDetails.logo}
          alt="Company Logo"
          className="w-20 h-20 object-cover rounded-full border border-gray-300"
        />
      </div>
      <p className="text-lg"><span className="font-semibold">Company Name:</span> {companyDetails.companyName}</p>
      <p className="text-lg"><span className="font-semibold">Email:</span> {companyDetails.email}</p>
      <p className="text-lg"><span className="font-semibold">Important Topic:</span> {companyDetails.impTopic}</p>
      <p className="text-lg"><span className="font-semibold">Visiting Since:</span> {companyDetails.visitingSince}</p>
      <h2 className="text-2xl font-bold mt-6">Oral Assessment</h2>
      <p className="text-lg mt-2">{companyDetails.oralAssessment}</p>
      <h2 className="text-2xl font-bold mt-6">Coding Round</h2>
      <p className="text-lg mt-2">{companyDetails.codingRound}</p>
      <h2 className="text-2xl font-bold mt-6">Preparation Tips</h2>
      <p className="text-lg mt-2">{companyDetails.preparationTips}</p>
    </div>
  );
};

export default CompanyDetailsPage;
