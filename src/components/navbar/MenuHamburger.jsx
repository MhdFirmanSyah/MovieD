const Menu = ({ menues }) => {
  return (
    <div className="container md:hidden absolute m-auto w-[90%] flex justify-center bg-black/50 items-center rounded-b-2xl right-0 left-0 z-50 backdrop-opacity-50 backdrop-blur-2xl shadow-lg shadow-black">
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
