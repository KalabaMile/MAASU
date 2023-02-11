import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUsersCog, FaAddressCard, FaServicestack, FaSuperpowers, FaServer } from "react-icons/fa";
import Left from "./components/home/Left";
import About from "./components/about/About";
import OurTeam from "./components/team/OurTeam";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [ourTeam, setOurTeam] = useState(false);
  const [contact, setContact] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white relative z-40 flex items-center justify-between p-4 lgl:p-0">
      {/* ================= Left Icons End here ======================== */}
      <div className="w-16 h-64 bg-transparent hidden lgl:flex flex-col">
        {/* ======= Other Icons Start */}
        <div className="w-full h-80 bg-bodyColor opacity-80 rounded-3xl relative z-20 flex flex-col items-center justify-between py-6">
          {/* About Icon */}
          <span
            onClick={() =>
              setAbout(true) &
              setOurTeam(false) &
              setContact(false) &
              setServices(false)
            }
            className={`${about
              ? "text-designColor"
              : "w-full h-6 text-white text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaAddressCard />
            <span className="text-white font-medium text-xs bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </span>
          {/* Services Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setOurTeam(false) &
              setContact(false) &
              setServices(true)
            }
            className={`${services
              ? "text-designColor"
              : "w-full h-6 text-white text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaServer />
            <span className="text-white font-medium text-xs bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Services
            </span>
          </span>
          {/* OurTeam Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setOurTeam(true) &
              setContact(false) &
              setServices(false)
            }
            className={`${ourTeam
              ? "text-designColor"
              : "w-full h-6 text-white text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaUsersCog />
            <span className="text-white font-medium text-xs bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Team
            </span>
          </span>
          {/* Contact Icon */}
          <span
            onClick={() =>
              setAbout(false) &
              setOurTeam(false) &
              setContact(true) &
              setServices(false)
            }
            className={`${contact
              ? "text-designColor"
              : "w-full h-6 text-white text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
              } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope />
            <span className="text-white font-medium text-xs bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </span>
        </div>
        {/* ======= Other Icons End */}
      </div>
      {/* ================= Left Icons Start here ====================== */}
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
        {/* ======================== Home Left Start here ============================ */}
        <Left
          about={() => setAbout(true) &
            setOurTeam(false) &
            setContact(false) &
            setServices(false)}
          services={() => setAbout(false) &
            setOurTeam(false) &
            setContact(false) &
            setServices(true)}
          contact={() => setAbout(false) &
            setOurTeam(false) &
            setContact(true) &
            setServices(false)}
          ourTeam={() => setAbout(false) &
            setOurTeam(true) &
            setContact(false) &
            setServices(false)}
        />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor opacity-80 rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            {about ? <About /> : null}
            {ourTeam ? <OurTeam /> : null}
            {contact ? <Contact /> : null}
            {services ? <Services /> : null}
          </div>
          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {services && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            )}
            {ourTeam && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <OurTeam />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
