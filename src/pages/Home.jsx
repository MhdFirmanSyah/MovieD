import NavBar from "../components/Navbar/NavBar";
import HeroBanner from "../components/Hero Section/HeroBanner";
import PopularSection from "../components/Popular Section/PopularSection";
import BottomSection from "../components/BottomSection";

const Home = ({ movies, trending }) => {
  return (
    <>
      <NavBar />
      <HeroBanner movies={movies} trending={trending} />
      <BottomSection>
        <PopularSection />
        <PopularSection />
      </BottomSection>
      <div
        className="border top-0 z-[9999999] fixed h-6 w-full opacity-5  rounded-md bg-blackmb-0 text-center uppercase font-extrabold text-white after:content-['normal/default']sssss
      sm:bg-green-700 sm:after:content-['sm/small-up-660px']
      md:bg-blue-500 md:after:content-['md/medium-up-768px']
      lg:bg-violet-600 lg:after:content-['lg/large-up-1024px']
      xl:bg-pink-700 xl:after:content-['xl-up-1280px']
      2xl:bg-red-950 2xl:after:content-['2xl-up-1536']"
      ></div>
    </>
  );
};

export default Home;
