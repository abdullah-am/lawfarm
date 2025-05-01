import React from 'react';

const BlogDetail = ({blog}) => {

    const { question, answer, date } = blog;



    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-4">
      <h2 className="text-xl font-semibold mb-2">{question}</h2>
      <div className="mb-4">
        <p className="text-gray-600 font-semibold">Answer:</p>
        <p className="text-gray-600">{answer}</p>
      </div>
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2">🕒</span>
        Added at {date}
      </div>
    </div>
    );
};

export default BlogDetail;