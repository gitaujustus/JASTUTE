"use client";
import Nav from "@/components/nav";
import WhyUs from "@/components/whyUs";
import CoreValues from "@/components/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import image from "../public/resourses/coding.jpg";
import image1 from "../public/resourses/coding1.jpg";
import image2 from "../public/resourses/About.jpg";
import image3 from "../public/resourses/desk-office.jpg";
import image4 from "../public/resourses/Ai-coding.jpg";
import image5 from "../public/resourses/growth.jpg";

export default function Home() {
  const images = [image, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);



  const controls = useAnimation();
  const [aboutUsRef, aboutUsInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (aboutUsInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [aboutUsInView, controls]);


  return (
    <section>
      <Nav />
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ height: 'calc(100vh - 50px)' }}
        className="relative flex items-center overflow-hidden bg-black"
      >
        <div className="z-10 text-white pl-3 md:pl-10">
          <p>
            <h4 className="text-xl">Elevate Your Digital Presence with </h4>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl font-header font-bold my-2 pb-2 border-b border-gray-400 w-[60%] md:w-1/2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text"
            >
              J&apos;ASTUTE
            </motion.h3>

            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="w-3/4 md:w-1/2 font-body1 text-lg"
            >
              J'ASTUTE: Pioneering tech and design solutions. A team dedicated
              to transforming concepts into digital brilliance. Elevate your
              online presence today.
            </motion.h5>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute top-0 right-0 w-2/3 h-full"
        >
          <Image
            src={images[currentImageIndex]}
            width={0}
            height={0}
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to left, rgba(31, 34, 53, 0) 0%, rgba(31, 34, 53, 0.98) 60%, rgba(31, 34, 53, 1) 70%)",
          }}
        ></div>
      </motion.div>
      {/* About Us */}
      <div
        ref={aboutUsRef}
        className="min-h-96 bg-[#434a74] px-5 md:px-10 flex items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="w-80 hidden md:flex"
        >
          <Image
            src={image2}
            width={640} // Set the desired width
            height={427} // Set the desired height
            alt="Your Photo"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-[90%] md:w-2/3 md:px-5"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left text-white mb-4 font-header">
            Who are We
          </h2>
          <div className="md:text-base">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white font-body1 text-lg"
            >
              At{" "}
              <span className="text-[#FEC835] ">J&apos;ASTUTE</span>, we are a
              dynamic team of tech visionaries and creative minds. Committed to
              redefining the digital landscape, we seamlessly blend innovation
              and design expertise.
            </motion.p>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-body1 text-lg"
            >
              Our{" "}
              <span className="text-[#FEC835]">mission</span> is to elevate
              businesses through cutting-edge technology and visually compelling
              graphics. With passion as our driving force, we bring ideas to
              life, delivering impactful solutions that resonate in the
              ever-evolving world of technology and design.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <WhyUs/>
      <CoreValues/>
    </section>
  );
}
