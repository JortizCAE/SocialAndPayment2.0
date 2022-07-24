import React from 'react';

export default function Card() {
  return (
    <div className="">
      <p className="text-dark font-light text-17xl mb-4">
        Lorem Ipsem Lorem IpsemLorem Ipsem Lorem IpsemLorem Ipsem Lorem Ipsem Lorem
      </p>
      <div className="bg-primary-700 rounded-t-xl rounded-b-lg">
        <img className="w-full rounded-lg" src="/images/Rectangle 58.png" alt="" />
        <div className="py-2 px-3 flex justify-between gap-2">
          <div>
            <p className="font-medium text-5xl text-white mb-1">
              Lorem Ipsem Lorem IpsemLorem Ipsem
            </p>
            <p className="text-4xl text-gray-150">Lorem Ipsem Lorem Ipsem</p>
          </div>
          <div>
            <button
              type="button"
              className="text-lg font-medium py-1.5 px-6 bg-white whitespace-nowrap rounded-md"
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
