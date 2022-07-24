import React from 'react';

export default function CreatePost() {
  return (
    <div className="bg-yellow-700 rounded-lg py-3 px-4 mb-5">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12">
          <div className="w-12 h-12">
            <img className="w-12 h-12" src="/images/img.svg" alt="" />
          </div>
        </div>
        <input
          className="bg-yellow-50 rounded-full w-full font-light
           placeholder:text-primary-700 text-gray-200 text-17xl py-4 px-6 border border-dark border-opacity-20 h-12 focus:outline-none"
          name=""
          id=""
          placeholder="What you have in your mind?"
        />
      </div>
      <hr className="border-primary-700 border-b border-t border-opacity-20 my-3" />
      <div className="flex gap-4 justify-between items-center pl-[60px]">
        <label
          htmlFor="select-image"
          className="flex px-5 py-3 bg-yellow-50 rounded-full cursor-pointer shadow-7xl gap-1"
        >
          <span>
            <img className="w-4 h-4" src="/images/picture-svgrepo-com 1.svg" alt="" />
          </span>
          <span className="font-semibold text-7xl text-primary-700">Add Image</span>
          <input type="file" className="hidden" id="select-image" />
        </label>
        <button
          type="button"
          className="flex items-center justify-center gap-1 bg-primary-700 text-yellow-50 text-7xl font-semibold rounded-full py-3 px-7 sm:px-14 hover:no-underline shadow-7xl"
        >
          Post
        </button>
      </div>
    </div>
  );
}
