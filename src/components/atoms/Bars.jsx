import { motion } from "framer-motion";

export default function Bars() {
  return (
    <motion.svg
      style={{
        originX: "center",
        originY: "center",
      }}
      whileHover={{ scale: 1.25, duration: 2, ease: "backInOut" }}
      whileTap={{ scale: 0.875 }}
      width="calc(0.75rem + 1vw)"
      height="auto"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="52" width="64" height="12" rx="6" fill="black" />
      <rect y="26" width="64" height="12" rx="6" fill="black" />
      <rect width="64" height="12" rx="6" fill="black" />
    </motion.svg>
  );
}
