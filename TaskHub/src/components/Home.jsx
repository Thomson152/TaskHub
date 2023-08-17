import React from "react";
import bgDark from "../assets/bg-desktop-dark.jpg";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";

const Home = () => {
  const { tasks, isLoading } = useSelector((state) => state.post);

  return (
    <div className="background relative mx-auto">
      <img src={bgDark} alt="background image" className="h-[250px] w-full" />
      <div
        className="
     sm:translate-x-[100px] sm:translate-y-[-150px] translate-y-[-170px]  px-[1rem]
      sm:px-[0rem] 
     md:translate-y-[-150px] 
     lg:translate-y-[-200px]
      md:translate-x-[280px] tab:translate-x-[430px]  lg:translate-x-[500px] flex flex-col  max-w-[500px]  "
      >
        <div className="">
          <div className="flex justify-between">
            <h1 className="md:text-4xl text-xl text-white ">TaskHub</h1>
            <BsSun className="text-3xl text-white" />
          </div>
        </div>

        <form className=" mt-7 ">
          <input
            className="w-[100%] py-4 px-5 shadow rounded-md text-white outline-none
         bg-[#161722]"
            placeholder="Enter Task"
            type="text"
          />

          <div className="mt-8 ">
            <List data={tasks} isLoading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
