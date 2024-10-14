'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2 p-4 justify-center">
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search Wikipedia"
    className="text-black border border-gray-300 p-3 rounded-lg w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 placeholder-gray-500 "
  />
  <button
    type="submit"
    className="bg-blue-600 text-white p-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
  >
    Search
  </button>
</form>
  );
};

export default Search;
