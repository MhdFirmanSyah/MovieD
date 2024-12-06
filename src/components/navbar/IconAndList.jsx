const Section1 = ({ isOpen, setIsOpen, menues }) => {
  const OpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex z-50 items-center ">
      {/* hamburger mobile */}
      <span
        onClick={OpenMenu}
        className="md:hidden w-10 h-10 my-auto mx-1 rounded-lg bg-slate-900/[0.5] flex hover:bg-slate-900 transisiton-all duration-300
         justify-center gap-1  flex-col cursor-pointer align-center p-1 place-items-center group z-50"
      >
        <span className="humberger-long "></span>
        <span className="humberger-set"></span>
        <span className="humberger-long "></span>
      </span>

      {/* logo */}
      <div className=" flex cursor-alias">
        <h1 className="bg-yellow-500 lg:mx-5 md:mx-2 my-3 py-1 px-3 rounded-lg  w-fit self-center font-bold sm:text-xl md:text-2xl lg:my-5 lg:text-2xl text-center">
          <span className="bg-black bg-clip-text">MovieD</span>
        </h1>
      </div>

      {/* nav desktop */}
      <div className="hidden md:flex w-90 lg:w-[27rem] h-10 mx-5 ">
        <ul className="flex content-center justify-center text-white gap-4 font-bold text-md w-full z-50">
          {menues.map((list) => {
            return (
              <li
                key={list}
                className="text-lg lg:text-2xl  lg:text-1xl items-center m-auto text-center justify-center place-content-center px-2 py-1 rounded-xl  content-center z-50"
              >
                {list}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Section1;
