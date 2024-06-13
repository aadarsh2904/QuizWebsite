import React from 'react';

export default function Recent() {
  const quizzes = [
    { name: 'Quiz-Name(1)', date: 'Date' },
    { name: 'Quiz-Name(2)', date: 'Date' },
    { name: 'Quiz-Name(3)', date: 'Date' }
  ];

  return (
    <div className="bg-green-800 p-4 rounded-lg shadow-md w-4/5 mx-auto mt-12 mb-16">
      <h2 className="text-white text-lg font-bold mb-4">Recently Attempted Quiz</h2>
      <div className="space-y-2">
        {quizzes.map((quiz, index) => (
          <div key={index} className="flex justify-between items-center bg-green-900 text-white p-2 rounded-md">
            <span>{index + 1}) {quiz.name}</span>
            <span>{quiz.date}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="text-white font-bold">SEE ALL &#9660;</button>
      </div>
    </div>
  );
}
