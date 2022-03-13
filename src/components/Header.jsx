import styles from "../styles/Header.module.scss";
import Logo from "./atoms/Logo";
import Navbar from "./Navbar";
import ProfilePhoto from "./atoms/ProfilePhoto";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.profilePhotoContainer}>
        <ProfilePhoto className={styles.profilePhoto} />
      </div>
      <a className={styles.logo} href="./">
        <Logo />
      </a>
      <Navbar />
    </div>
  );
}
