import React from "react";
import image3 from "../public/resourses/Expertise.jpg";
import innovation  from "../public/resourses/Innovation.jpg";
import quality  from "../public/resourses/Quality.jpg";
import timely from "../public/resourses/Timely.jpg";
import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useEffect } from "react";

function whyUs() {
  const controls = useAnimation();
    const [componentRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: "-100px",
      threshold: 0.5,
    })
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    },[inView])
  return (
    <section 
     className="min-h-96 px-5 md:px-10 ">
        <h1 className="my-5 font-header text-xl md:text-2xl text-center">Why Choose Us</h1>
      <motion.div
      animate={controls}
      initial={{ opacity: 0.05, y: 30 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex justify-around flex-wrap items-center">
        {/* Card */}
        <div 
      ref={componentRef}
        className="bg-[#434a74] h-64 w-[90%] sm:w-[55%] md:w-64 rounded-md shadow-sm shadow-gray-400 hover:border-b-2 border-yellow-400  mt-4">
          <div className="bg-slate-200 h-40 rounded-t-md ">
            <Image
              className="rounded-t-md w-full h-full object-cover"
              src={image3}
              alt="Expertise"
            />
          </div>
          <div className="font-body1 text-center">
            <h4 className="text-yellow-400">Expertise</h4>
            <p className="px-1">
              Benefit from our extensive expertise in technology and design.
            </p>
          </div>
        </div>
        <div className="bg-[#434a74] h-64 w-[90%] sm:w-[55%] md:w-64 rounded-md shadow-sm shadow-gray-400 hover:border-b-2 border-yellow-400  mt-4">
          <div className="bg-slate-200 h-40 rounded-t-md">
            <Image
              className="rounded-t-md w-full h-full object-cover"
              src={innovation}
              alt="innovation"
            />
          </div>
          <div className="font-body1 text-center">
            <h4 className="text-yellow-400">Innovation</h4>
            <p className="px-1">
            Stay ahead with innovative solutions tailored to your needs.
            </p>
          </div>
        </div>
        <div className="bg-[#434a74] h-64 w-[90%] sm:w-[55%] md:w-64 rounded-md shadow-sm shadow-gray-400 hover:border-b-2 border-yellow-400  mt-4">
          <div className="bg-slate-200 h-40 rounded-t-md ">
            <Image
              className="rounded-t-md w-full h-full object-cover"
              src={quality}
              alt="innovation"
            />
          </div>
          <div className="font-body1 text-center">
            <h4 className="text-yellow-400">Quality Assurance</h4>
            <p className="px-1">
            Assured quality in every project - we strive for excellence.
            </p>
          </div>
        </div>
        <div className="bg-[#434a74] h-64 w-[90%] sm:w-[55%] md:w-64 rounded-md shadow-sm shadow-gray-400 hover:border-b-2 border-yellow-400 mt-4 ">
          <div className="bg-slate-200 h-40 rounded-t-md ">
            <Image
              className="rounded-t-md w-full h-full object-cover"
              src={timely}
              alt="timely"
            />
          </div>
          <div className="font-body1 text-center">
            <h4 className="text-yellow-400">Timely Delivery:</h4>
            <p className="px-1">
            On-time delivery is our commitment to you.
            </p>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
}

export default whyUs;
