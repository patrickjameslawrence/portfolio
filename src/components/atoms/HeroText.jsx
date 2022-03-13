import { motion } from "framer-motion";

export default function HeroText(props) {
  return (
    <motion.h1
      initial={{
        rotate: "10deg",
        opacity: 0,
        x: "10vw",
        filter: "blur(15px)",
      }}
      animate={{
        rotate: "0deg",
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
      }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        delay: props.delay ? props.delay : 0,
      }}
    >
      {props.text}
    </motion.h1>
  );
}
