import React from 'react';
import UserInfo from '../../components/common/UserInfo';
import Card from './Card';

export default function Article() {
  return (
    <div className="bg-yellow-700 rounded-lg py-3 px-4">
      <div className="mb-5">
        <UserInfo image="/images/img (1).png" name="Alex De Silva" active="12 Hours Ago" />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-4">
        <Card />
        <div className="hidden md:block">
          <Card />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <button type="button" className="flex gap-1 items-center">
          <img className="w-6 h-6" src="/images/image 18 (1).png" alt="" />
          <span className="font-medium text-7xl">20</span>
        </button>
        <button type="button" className="flex gap-1 items-center">
          <img className="w-6 h-6" src="/images/icons8-topic-50 3.png" alt="" />
          <span className="font-medium text-7xl">20</span>
        </button>
        <button type="button" className="flex gap-1 items-center">
          <img className="w-[18px] h-[18px]" src="/images/icons8-send-60 13.png" alt="" />
        </button>
      </div>
    </div>
  );
}
