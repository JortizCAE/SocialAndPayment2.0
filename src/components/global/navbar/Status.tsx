import React from 'react';
import { Link } from 'react-router-dom';

const icons = [
  {
    id: 33,
    title: 'Email',
    url: '/',
    icon: '/images/Group 144 (1).svg',
  },
  {
    id: 32,
    title: 'Notification',
    url: '/',
    icon: '/images/Group 46.svg',
  },
];

export default function Status() {
  return (
    <div>
      <ul className="flex list-none gap-7 items-center">
        {icons.map(({ id, title, url, icon }) => (
          <li key={id}>
            <Link to={url}>
              <img src={icon} alt={title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
