import { useState } from "react";
import Section1 from "./IconAndList";
import Section2 from "./SearchAndDarkmode";
import Menu from "./MenuHamburger";

// import HamburgerMenu from "./HamburgerMenu.jsx";

const NavBar = () => {
  const navList = ["Popular", "Top Rated", "Upcoming"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row ">
        <nav
          className="bg-gradient-to-t fixed top-0
dark:from-black dark:to-cyan-950 from-aqua-light to-red-light  w-full flex justify-between items-center  z-50 shadow-md shadow-black"
        >
          <Section1 isOpen={isOpen} setIsOpen={setIsOpen} menues={navList} />
          <Section2 />
        </nav>
        <Menu menues={navList} isOpen={isOpen} />
      </div>
    </>
  );
};
export default NavBar;
