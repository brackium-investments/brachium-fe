"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({
  index,
  expanded,
  setExpanded,
  title,
  text,
}: {
  index: number;
  expanded: number | false;
  setExpanded: Function;
  title: string;
  text: string;
}) => {
  const isOpen = index === expanded;
  return (
    <div className="mb-[2rem] rounded-xl overflow-hidden">
      <motion.div
        initial={false}
        // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : index)}
        className="p-[1.5rem] cursor-pointer bg-color-blue text-color-white text-[1.8rem] "
      >
        <p>{title}</p>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 100 },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="p-[1rem] bg-color-light-blue text-[1.7rem]"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
