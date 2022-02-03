import { AiFillDiff } from "react-icons/ai";
import Link from "next/link";
import Button from "./Button";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <p>Welcome, I&apos;m</p>
        <h1>Alan Giavino</h1>
        <p className={styles.subtitle}>
          A Full Stack Web Developer, passionate about tech & design.
        </p>
        <div className={styles.cta}>
          <Link passHref href="/#contact-me">
            <a>
              <Button icon={AiFillDiff} style="outline">
                Contact me
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <a>
        <img src="/Avatar.png" alt="Avatar Image" />
        </a>
      </div>
    </section>
  );
};

export default Hero;