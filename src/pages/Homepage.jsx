import styles from "../styles/Homepage.module.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  );
}
