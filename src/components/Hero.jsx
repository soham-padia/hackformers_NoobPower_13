import React from "react";
import { Navbar } from "./Navbar";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router";

export const Hero = () => {
    const navigate=useNavigate
  return (
    <div className="h-screen flex snap-center items-center justify-start flex-col">
      <Navbar></Navbar>
      <div className="h-4/6 snap-center bg-black text-white font-mono flex w-screen px-20 p-2 justify-between">
        <div className="basis-2/5 flex flex-col justify-center gap-5">
          <h1 className="font-mono text-5xl">
            Get fastest Delivery at lowest Cost.
          </h1>
          <p className="text-[#da4ea2] text-8xl font-black">AMAZE</p>
          <motion.a 
            href="/login"
            whileFocus={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#35353577] w-1/2 rounded-md hover:bg-[#353535] p-3"
          >
            Connect
          </motion.a>
        </div>
      </div>
    </div>
  );
};
