import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className="flex justify-center">
      <div className="w-screen flex justify-between items-center px-10 p-2">
        <div className="flex items-center gap-12">
          <img src="img/amaze.png" alt="" className="h-20 w-20" />
          <ul className="flex gap-5 list-none">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              Skills
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              Contact
            </motion.li>
          </ul>
        </div>
        
        <div>
            {/* login redirect and other profile details*/}
            <motion.a href="/login">
              <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-transparent cursor-pointer"
              >
                Log in
              </motion.button>
            </motion.a>
        </div>
      </div>
    </div>
  );
};
