import styles from "../styles/Navbar.module.scss";
import NavLink from "./atoms/NavLink";
import NavButton from "./atoms/NavButton";
import resume from "../assets/resume.pdf";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <NavLink href="./" text="Home" />
        /
        <NavLink href={resume} text="Resume" />
        /
        <NavLink href="./portfolio" text="Portfolio" />
        /
        <NavLink href="./blog" text="Blog" />
        /
        <NavButton href="fixLater" text="Contact" />
      </ul>
    </nav>
  );
}
