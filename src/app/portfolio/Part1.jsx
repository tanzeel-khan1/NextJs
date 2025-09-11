import React from 'react';
import { motion } from 'framer-motion';
const Part1 = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 h-auto md:h-[30rem]">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <h1 className="pt-4 md:pt-10 text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Hi! I'm <span className="text-blue-800">Tanzeel</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium mt-3 text-black ml-1">
            Frontend Developer
          </h2>
          <p className="mt-4 text-gray-700 text-[16px] leading-relaxed">
            I build modern, responsive UIs using React and Tailwind CSS. Passionate about clean design, animations, and creating meaningful web experiences.
          </p>
        </motion.div>

        <motion.div
        
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <img
            src="/your-image.png" 
            alt="Tanzeel"
            className="w-[280px] md:w-[380px] rounded-xl shadow-lg object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Part1;
