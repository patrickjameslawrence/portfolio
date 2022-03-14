import Bars from "../components/atoms/Bars";
import { motion } from "framer-motion";
import styles from "../styles/CollapsableNavbar.module.scss";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CollapsableNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const motionDiv = (
    <motion.div
      className={styles.navbar}
      initial={{
        opacity: 0,
        filter: "blur(15px)",
        left: "-100%",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        left: "0%",
      }}
    >
      <Navbar className="test" collapsable />
    </motion.div>
  );

  return (
    <motion.div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
      <Bars />
      {isOpen && motionDiv}
    </motion.div>
  );
}
