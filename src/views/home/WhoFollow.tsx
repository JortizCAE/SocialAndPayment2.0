import React from 'react';

export default function WhoFollow() {
  return (
    <div className="bg-yellow-700 rounded-lg p-5">
      <h4 className="font-poppins text-medium text-28xl mb-3">Who to Follow</h4>
      <ul className="flex flex-col gap-5">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="flex items-center gap-3">
            <img
              className="w-[30px] h-[30px] rounded-full border border-white "
              src="/images/Ellipse 31.jpg"
              alt=""
            />
            <p className="flex items-center gap-1 flex-grow text-8xl font-montserrat text-gray-500">
              <span className="">Thomas Ben</span>
              <img src="/images/Frame.svg" alt="" />
            </p>
            <div>
              <button
                type="button"
                className="font-medium font-montserrat text-3xl bg-white rounded-md py-2 px-3"
              >
                Follow
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
