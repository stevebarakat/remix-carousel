import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const Pages = () => {
  const [[key, direction], setKey] = useState([0, 0]);

  const paginate = (newDirection) => {
    setKey([key + newDirection, newDirection]);
  };

  return (
    <div className="box-wrapper">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={key}
          className="box"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <div className="next" onClick={() => paginate(1)}>
            {"‣"}
          </div>
          key: {key}
          <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
