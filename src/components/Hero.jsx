import styles from "../styles/Hero.module.scss";
import HeroText from "./atoms/HeroText";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <AnimatePresence>
      <motion.section exit={{ opacity: 0 }} className={styles.container}>
        <HeroText text="Hi there!" />
        <HeroText text="I'm Patrick." delay=".25" />
        <HeroText text="I'm a hobbyist web developer." delay=".5" />
        <HeroText text="Come check out my stuff." delay=".75" />
      </motion.section>
    </AnimatePresence>
  );
}
