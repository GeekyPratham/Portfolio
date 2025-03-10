import { motion } from "framer-motion";
import { X } from "lucide-react";

const CrossButton = ({ onClick, size = 24, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ width: size + 16, height: size + 16 }} // Adjust button size
    >
      <X className="text-white" size={size} />
    </motion.button>
  );
};

export default CrossButton;
