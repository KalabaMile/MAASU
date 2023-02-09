import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiSend } from "react-icons/fi";
import { logo } from "../../assets/index";
import { motion } from "framer-motion";
import { FaAddressCard, FaServer, FaUsersCog } from "react-icons/fa";

const Left = ({ services, about, contact, ourTeam }) => {
  const [text] = useTypewriter({
    words: ["We are MAASU.", "We love what","We do.", "Grow with us."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 bg-bodyColor opacity-80 rounded-2xl shadow-testShwdow">
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <a onClick={about} role="button" href="#">
          <motion.img className="px-20 py-10" alt="logo" src={logo}
            animate={{ scale: 0.9 }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          />
          </a>
          <p className="text-base text-4xl text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
        </div>
        <div className="flex h-14">
          <button onClick={about} className="w-1/2 border-t-[1px] border-t-zinc-800 border-r-[1px] border-r-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-3 hover:text-designColor duration-300">
            About Us <FaAddressCard />
          </button>
          <button onClick={services} className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-3 hover:text-designColor duration-300">
            Our Services <FaServer />
          </button>
        </div>
        <div className="flex h-14">
          <button onClick={ourTeam} className="w-1/2 border-t-[1px] border-t-zinc-800 border-r-[1px] border-r-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-3 hover:text-designColor duration-300">
            Our team <FaUsersCog />
          </button>
          <button onClick={contact} className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-3 hover:text-designColor duration-300">
            Get in touch <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;