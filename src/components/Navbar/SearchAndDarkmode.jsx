import { useState, useEffect, useRef } from "react";
import DarkMode from "./DarkMode.jsx";

const Section2 = ({}) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setSearchIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const OpenSearchInput = () => {
    setSearchIsOpen(() => !searchIsOpen);
  };

  return (
    <section className="flex mx-1 p-2 gap-5">
      <div
        ref={searchRef}
        className={`cursor-pointer rounded-full  md:rounded-l-sm relative transition-all duration-200  bg-white flex justify-end ${
          searchIsOpen ? "w-[200px] md:w-52" : "w-8  md:w-36"
        }`}
      >
        <input
          onFocus={(() =>{
            setSearchIsOpen(() => true);
          })}
          type="text"
          placeholder="Search Movies!.."
          className={`font-mono mr-8 bg-white rounded-full md:rounded-sm absolute h-full w-full p-2 focus:outline-none outline-none   text-center delay-1000 transition-all placeholder:text-slate-400 md:block placeholder:italic ${
            searchIsOpen ? "block  " : "w-0  hidden"
          }`}
        />

        <img
          onClick={OpenSearchInput}
          className={`h-8 lg:h-9 relative transition-all duration-100 p-1 bg-yellow-500 rounded-full ${
            searchIsOpen ? "rotate-[-85deg]" : ""
          }`}
          src="./src/assets/image/search.png"
          alt=""
        />
      </div>

      <DarkMode />
    </section>
  );
};
export default Section2;
