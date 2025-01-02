import Card from "./Card";

const PopularSection = () => {
  const arr = [1, 6, 4, 10, 20, 7, 2, 5, 3, 8];
  console.log(arr);
  return (
    <div className=" color-white x-10 flex bg-red-400 m-auto justify-center">
      <div className="container border-black border p-5  mx-5 flex flex-wrap justify-center gap-4 ">
        {arr.map((arr) => (
          <Card key={arr} />
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
