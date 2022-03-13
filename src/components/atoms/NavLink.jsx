import { motion } from "framer-motion";
import styles from "../../styles/NavLink.module.scss";

export default function NavLink(props) {
  return (
    <motion.li
      className={styles.container}
      whileHover={{ backgroundColor: "#eee" }}
      whileTap={{ scale: 0.75 }}
      transition={{ type: "linear", duration: 0.25 }}
    >
      <a className={styles.link} href={props.href}>
        {props.text}
      </a>
    </motion.li>
  );
}
