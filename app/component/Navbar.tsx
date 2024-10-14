'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold">WikiSearch</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
