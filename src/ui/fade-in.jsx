import React from "react";
import { motion } from "framer-motion";

export default function FadeIn({ children, ...props }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...props}>
      {children}
    </motion.div>
  );
}
