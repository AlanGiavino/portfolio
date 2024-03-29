import Link from "next/link";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";

import styles from "../styles/Menu.module.css";

const Menu = ({ setIsMenuOpen, isMenuVisible }) => {
  const [selectedGradient, setSelectedGradient] = useState(
    () => Number(localStorage.getItem("gradient")) || 1
  );

  useEffect(() => {}, []);

  const handleChangeGradient = (gradient) => {
    setSelectedGradient(gradient);
    localStorage.setItem("gradient", gradient);
    document.body.className = `gradient${gradient}`;
  };

  return (
    <section
      className={`${styles.container} ${
        !isMenuVisible ? styles.closing : styles.opening
      }`}
    >
      <div className={styles.content}>
        <section className={styles.socials}>
          <div className={styles.item}>
            <p className={styles.title}>Socials</p>
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/AlanGiavino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/alan-giavino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine color="white" />
              </a>
              <a href="mailto:alangiavino97@gmail.com">
                <AiOutlineMail color="white" />
              </a>
            </div>
            <section className={styles.customize}>
              <p className={styles.title}>Customize</p>
              <div>
                <button
                  onClick={() => handleChangeGradient(1)}
                  className={`${styles.customizeOne} ${
                    selectedGradient === 1 && styles.selected
                  }`}
                ></button>
                <button
                  onClick={() => handleChangeGradient(2)}
                  className={`${styles.customizeTwo} ${
                    selectedGradient === 2 && styles.selected
                  }`}
                ></button>
                <button
                  onClick={() => handleChangeGradient(3)}
                  className={`${styles.customizeThree} ${
                    selectedGradient === 3 && styles.selected
                  }`}
                ></button>
                <button
                  onClick={() => handleChangeGradient(4)}
                  className={`${styles.customizeFour} ${
                    selectedGradient === 4 && styles.selected
                  }`}
                ></button>
              </div>
            </section>
          </div>
        </section>
        <nav className={styles.nav}>
          <p className={styles.title}>Navigate</p>
          <ul
            onClick={() => setIsMenuOpen(false)}
            className={styles.navigation}
          >
            <li>
              <Link href="/#home">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#my-projects">My projects</Link>
            </li>
            <li>
              <Link href="/#contact-me">Contact me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Menu;
