const Menu = ({ menues, isOpen }) => {
  return (
    <div
      className={` container md:hidden fixed m-auto w-[90%] flex justify-center color-base-blur-reverse items-center rounded-b-2xl right-0 left-0 z-10 backdrop-blur-2xl dark:shadow-xl shadow-md shadow-white dark:shadow-black  ${
        isOpen
          ? "top-[3.5rem] sm:top-[3.7rem] md:top-[4rem] lg:top-[5rem]"
          : "top-[-200px]"
      }`}
    >
      <ul className="w-[90%] h-full m-auto p-1  ">
        {menues.map((menu) => (
          <li
            className="p-2 cursor-pointer bg-white m-3 rounded-md w-cover hover:bg-yellow-500 text-center font-bold text-md"
            key={menu}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
