'use client';

import { NavLink } from './nav-link';

export function NavLinkContents() {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/20574181/pexels-photo-20574181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
      className="absolute flex justify-between items-center mt-[20px] mx-0 my-auto w-[70vw] px-[100px] h-[60px] bg-indigo-300 rounded-[20px] shadow-indigo-500 shadow-lg"
    >
      <div>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/news'}>News</NavLink>
        <NavLink href={'/blog'}>Blog</NavLink>
        <NavLink href={'/about'}>About</NavLink>
      </div>
      <div>
        <NavLink href={'/admin/login'}>Login</NavLink>
      </div>
    </div>
  );
}
