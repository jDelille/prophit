import React from 'react';
import Link from 'next/link';

import './sidebar.scss';

type SidebarProps = {};
const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
         <Link href="/" className='logo'>
          Prop<span>hit</span>
        </Link>
      <ul className="links">
        <li className="link">Home</li>
        <li className="link">Schedule</li>
        <li className="link"></li>
        <li className="link"></li>
        <li className="link"></li>
        <li className="link"></li>
      </ul>
    </div>
  );
};

export default Sidebar;