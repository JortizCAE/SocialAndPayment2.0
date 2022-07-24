import React from 'react';

export default function Search() {
  return (
    <div className="flex flex-grow items-center gap-4 bg-yellow-100 rounded-full py-4 px-5">
      <button type="button">
        <img className="h-4" src="/images/Group 6.svg" alt="" />
      </button>
      <input
        type="text"
        className="placeholder:text-gray-400 text-gray-200 bg-transparent flex-grow w-full text-21xl"
        placeholder="Search here"
      />
    </div>
  );
}
