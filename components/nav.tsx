'use-client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  
  useEffect(() => {
    const handleClickOutside = () => {
      // if (node.current.contains(e.target)) {
      //   return;
      // }
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-gradient-to-r from-bg-start to-bg-end p-4">
      <div className="container mx-auto flex items-center justify-between bg-gradient-to-r from-dynamic-orange to-dynamic-orang">
        <Link href="/">
          <p className="text-white font-bold text-lg">J'ASTUTE</p>
        </Link>

        <div className="hidden sm:flex space-x-8">
          <Link href="/">
            <p className="text-white">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white">About</p>
          </Link>
          <Link href="/services">
            <p className="text-white">Services</p>
          </Link>
          <Link href="/projects">
            <p className="text-white bg-dynamic-orange">Projects</p>
          </Link>
          <Link href="/contacts">
            <p className="text-white bg-dynamic-orange">Contacts</p>
          </Link>
        </div>

        <div className="sm:hidden cursor-pointer">
          <div onClick={toggleMenu} className="text-white">
            {menuOpen ? <IoMdClose size={24} /> : <IoMenuSharp size={24} />}
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, borderTop: '2px solid #fff' }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col absolute top-[60px] right-0 w-full items p-3 z-20 bg-[#1f2235] shadow-lg shadow-[#434A74]"
              >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <p className="text-white p-2 hover:bg-[#2a2e47]">Home</p>
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <p className="text-white p-2 hover:bg-[#2a2e47]">About</p>
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <p className="text-white p-2 hover-bg-[#2a2e47]">Services</p>
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <p className="text-white p-2 hover:bg-[#2a2e47]">Projects</p>
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <p className="text-white p-2 hover:bg-[#2a2e47]">Contacts</p>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export default Nav;


// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { IoMenuSharp } from "react-icons/io5";
// import { IoMdClose } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import logo from "../public/resourses/Jastute.png";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const router = useRouter();

//   const pathname = usePathname();

//   const [isOpen, setIsOpen] = useState(false);
//   const node = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     // if (node.current.contains(e.target)) {
  //     //   return;
  //     // }
  //     if (isOpen) {
  //       setIsOpen(false);
  //     }
  //   };

  //   const handleScroll = () => {
  //     if (isOpen) {
  //       setIsOpen(false);
  //     }
  //   };
  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     window.addEventListener("scroll", handleScroll);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     window.removeEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isOpen]);

//   return (
//     <nav
//       className="h-[60px] p-0 m-0 flex justify-between sm:px-4 sm:items-center top-0 "
//       ref={node}
//     >
//       <div className="h-[60px] flex items-center">
//         <Image
//           className="h-[60px] w-auto p-[4px] rounded"
//           src={logo}
//           alt="J'ASTUTE"
//           width={100}
//           height={100}
//         />
//         <h1 className="font-bold">J'ASTUTE</h1>
//       </div>

//       <section className="flex items-center">
//         <div className="flex items-center">
//           <div className=" sm:w-auto">
//             <div className="sm:hidden flex-col">
//               {isOpen && (
//                 <ul className="navlinks  p-4 flex flex-col gap-8 text-left shadow-lg shadow-[#456789] font-body absolute top-[60px] right-0 w-[130px]">
//                   <li>
//                     <Link href="/" onClick={() => setIsOpen(false)}>
//                       Home
//                     </Link>
//                   </li>
//                   <li className={pathname === "/events" ? "active" : ""}>
//                     <span
//                       className="cursor-pointer"
//                       onClick={() => {
                       
//                       }}
//                     >
//                       Events
//                     </span>
//                   </li>
//                   <li>
//                     <Link href="/join-us" onClick={() => setIsOpen(false)}>
//                       Join Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/contacts" onClick={() => setIsOpen(false)}>
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </div>
//             <div>
//               <ul className="navlinks hidden sm:flex gap-5 md:gap-12 font-body">
//                 <li className={pathname === "/" ? "active" : ""}>
//                   <Link href="/">Home</Link>
//                 </li>
//                 {/* <li className={pathname === '/gallery' ? 'active' : '' }  ><Link href='/gallery'>Gallery</Link></li> */}
//                 <li className={pathname === "/events" ? "active" : ""}>
//                   <span
//                     className="cursor-pointer"
//                     onClick={() => {
//                       const section = document.getElementById("events");
//                       if (pathname !== "/") {
//                         router.push("/#events");
//                       }
//                       if (section) {
//                         section.scrollIntoView({ behavior: "smooth" });
//                       }
//                     }}
//                   >
//                     Events
//                   </span>
//                 </li>
//                 <li className={pathname === "/join-us" ? "active" : ""}>
//                   <Link href="/join-us">Join Us</Link>
//                 </li>
//                 <li className={pathname === "/contacts" ? "active" : ""}>
//                     <Link href="/contacts" >
//                       Contact
//                     </Link>
//                   </li>
//               </ul>
//             </div>
//           </div>

//           <div className="flex ">
//             <span className="sm:hidden mr-4">
//               {isOpen ? (
//                 <IoMdClose
//                   size="30px"
//                   className="my-2 cursor-pointer hover"
//                   onClick={() => setIsOpen(!isOpen)}
//                 />
//               ) : (
//                 <IoMenuSharp
//                   size="30px"
//                   className="my-2 cursor-pointer hover"
//                   onClick={() => setIsOpen(!isOpen)}
//                 />
//               )}
//             </span>
//           </div>
//         </div>
//       </section>
//     </nav>
//   );
// };

// export default Navbar;
