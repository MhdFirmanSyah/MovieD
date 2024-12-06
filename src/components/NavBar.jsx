import { useState } from "react";
import Section1 from "./navbar/IconAndList";
import Section2 from "./navbar/SearchAndDarkmode";
import Menu from "./navbar/MenuHamburger";

// import HamburgerMenu from "./HamburgerMenu.jsx";

const NavBar = () => {
  const navList = ["Popular", "Top Rated", "Upcoming"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="bg-gradient-to-t
dark:from-black dark:to-cyan-950 from-aqua-light to-red-light h-15 w-full flex justify-between items-center "
      >
        <Section1 isOpen={isOpen} setIsOpen={setIsOpen} menues={navList} />
        <Section2 />
      </nav>
      {isOpen && <Menu menues={navList} />}
    </>
  );
};
export default NavBar;
