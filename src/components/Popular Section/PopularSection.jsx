import Card from "./Card";

const PopularSection = () => {
  const arr = [1, 6, 4, 10, 20, 7, 2, 5, 3, 8];
  console.log(arr);
  return (
    <section className=" color-white x-10  m-auto justify-center items-center flex">
      <div className="container rounded-md color-base-reverse mx-5 shadow-xl shadow-white dark:shadow-black">
        <div className="text-white text-center  p-5 text-2xl">
          <h1>Popular</h1>
        </div>
        <div className=" flex pb-5 flex-wrap justify-center gap-4 ">
          {arr.map((arr) => (
            <Card key={arr} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
