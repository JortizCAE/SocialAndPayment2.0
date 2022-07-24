import React from 'react';
import Article from './Article';
import WhoFollow from './WhoFollow';
import Event from './event/Event';
import Friends from './friends/Friends';
import LinkButton from '../../components/common/LinkButton';
import CreatePost from './CreatePost';

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-5">
          <div className="flex flex-col gap-6">
            <WhoFollow />
            <Event />
            <div className="xl:hidden">
              <Friends />
            </div>
          </div>
          <div className="lg:col-span-2">
            <CreatePost />
            <div className="flex flex-col gap-5 mb-3">
              {[...Array(4)].map((_, i) => (
                <Article key={i} />
              ))}
            </div>
            <a href="#" className="font-medium text-16xl">
              See More
            </a>
          </div>
          <div className="hidden xl:block">
            <Friends />
          </div>
        </div>
      </div>
    </div>
  );
}
