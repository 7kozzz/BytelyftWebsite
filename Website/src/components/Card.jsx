import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-12 cursor-grab"  // Reduced from w-15 to w-12
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-3 text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[10rem] cursor-grab"  // Reduced py-4 to py-3, text-xl to text-lg, w-[12rem] to w-[10rem]
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;