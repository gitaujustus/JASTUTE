
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Justute from "../public/resourses/Jastute.png";
import Image from "next/image";
import React, { useEffect } from "react";

const CircleWithQuarters = () => {
  // Controls for the circle animation
  const circleControls = useAnimation();
  const [circleRef, circleInView] = useInView({
    triggerOnce: true,
  });

  // Controls for the cards animation
  const cardsControls = useAnimation();
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (circleInView) {
      circleControls.start({ opacity: 1, rotate: 0 });
    }
    if (cardsInView) {
      cardsControls.start({ opacity: 1, y: 0 });
    }
  }, [circleInView, circleControls, cardsInView, cardsControls]);

  return (
    <section className="bg-[#141724]">
      <h1 className="py-5 font-header text-xl md:text-2xl text-center">Our Core Values</h1>
      <div ref={circleRef} className="flex justify-center flex-wrap gap-10 py-4 py-11">
        <motion.div
          initial={{ opacity: 0.05, rotate: -360 }}
          animate={circleControls}
          transition={{ duration: 1 }}
          className="relative w-72 h-72 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center"
        >
          <div className="relative w-16 h-16 rounded-full z-10 flex items-center justify-center transition-transform transform-gpu hover:rotate-[360deg] duration-500 shadow-lg">
            <Image
              src={Justute}
              alt="Profile"
              width={100}
              height={100}
              className="w-full h-full object-fill rounded-full"
            />
          </div>

          <div className="absolute  w-1/2 h-1/2 bg-[#434A74] top-0 left-0 flex items-center justify-center font-bold">
            Integrity
          </div>
          <div className="absolute  w-1/2 h-1/2 bg-[#0667BD] top-0 right-0 flex items-center justify-center font-bold">
            Integrity
          </div>
          <div className="absolute  w-1/2 h-1/2 bg-[#3b8fd8] bottom-0 left-0 flex items-center justify-center font-bold">
            Integrity
          </div>
          <div className="absolute  w-1/2 h-1/2 bg-[#6973b6] bottom-0 right-0 flex items-center justify-center font-bold">
            Integrity
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0.07, y: 20 }}
        animate={cardsControls}
        transition={{ delay: 0.5, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-7"
      >

        {/* Cards content */}
        <motion.div
            className="bg-[#6973b6]  p-4 rounded-lg shadow-md border-t-2 border-yellow-300"
          >
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Integrity</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, repellendus.
            </p>
          </motion.div>
          <motion.div
            className="bg-[#6973b6]  p-4 rounded-lg shadow-md border-t-2 border-yellow-300"
          >
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Innovation</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, repellendus.
            </p>
          </motion.div>
          <motion.div
            className="bg-[#6973b6]  p-4 rounded-lg shadow-md border-t-2 border-yellow-300"
          >
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Customer-Centricity</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, repellendus.
            </p>
          </motion.div>
          <motion.div
            className="bg-[#6973b6]  p-4 rounded-lg shadow-md border-t-2 border-yellow-300"
          >
            <h4 className="text-xl font-bold mb-2 text-yellow-300">Collaboration</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, repellendus.
            </p>
          </motion.div>
      </motion.div>
    </section>
  );
};

export default CircleWithQuarters;

