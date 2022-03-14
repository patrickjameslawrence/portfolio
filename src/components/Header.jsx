import styles from "../styles/Header.module.scss";
import Logo from "./atoms/Logo";
import Navbar from "./Navbar";
import CollapsableNavbar from "./CollapsableNavbar";
import ProfilePhoto from "./atoms/ProfilePhoto";
import { useState, useEffect } from "react";

export default function Header() {
  // Copied code from: https://usehooks.com/useWindowSize/
  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.profilePhotoContainer}>
        <ProfilePhoto className={styles.profilePhoto} />
      </div>
      <a className={styles.logo} href="./">
        <Logo />
      </a>
      {size.width > 900 ? <Navbar /> : <CollapsableNavbar />}
    </div>
  );
}
