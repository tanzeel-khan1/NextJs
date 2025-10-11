"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-sm fixed top-0 z-50"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <h1 className=" cursor-pointer text-xl sm:text-2xl font-bold text-blue-700 tracking-wide">
            Tanzeel
          </h1>
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-[15px]">
            {["Experience", "About", "Projects", "Best"].map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </motion.li>
            ))}
            
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            Contact
          </motion.button>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 space-y-2"
            >
              <ul className="flex flex-col gap-2 text-gray-700 font-medium text-[15px]">
                {["Experience", "About", "Projects", "Best"].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-600 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
