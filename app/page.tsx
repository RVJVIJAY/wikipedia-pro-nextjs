

import Search from "./component/Search";
import './globals.css'
export default function HomePage() {
  return (
    <>
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-8">Welcome to WikiSearch!</h1>
        <p className="text-lg mb-8">Enter a term below to search Wikipedia:</p>
        <Search />
      </div>
    </>
  );
}
