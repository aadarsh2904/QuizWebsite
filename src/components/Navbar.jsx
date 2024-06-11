import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <nav className="flex h-16" style={{ backgroundColor: "rgb(14, 32, 32)" }}>
        <h1 className="font-joti ml-8 mt-2 text-3xl text-white">
          <a href="">Xcurrate</a>
        </h1>
        <h3 className="font-joti ml-32 mt-3 text-xl text-white hover:text-lg">
          <a href="">Wishlist</a>
        </h3>
        <h3 className="font-joti ml-20 mt-3 text-xl text-white hover:text-lg">
          <a href="">Mentors</a>
        </h3>
        <h3 className="font-joti ml-20 mt-3  text-xl text-white hover:text-lg">
          <a href="">Courses</a>
        </h3>
        <h3 className="font-joti ml-20 mt-3  text-xl text-white hover:text-lg">
          <a href="">My Learning</a>
        </h3>

        <div
          className="ml-40 mt-3 flex items-center border border-transparent h-8 rounded-full"
          style={{ backgroundColor: "rgb(217, 217, 217)" }}
        >
          <FaSearch className="ml-2 mr-1 text-gray-500" />
          <input
            placeholder="Type to Search"
            className="flex-1 bg-transparent outline-none px-10 "
          />
        </div>

        <div
          className="ml-6 mt-1 flex items-center justify-center h-11 w-12 rounded-full "
          style={{ backgroundColor: "rgb(217, 223, 149)" }}
        >
          <span className="font-joti text-2lx font-bold text-black">AJ</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
