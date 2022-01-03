import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

import styles from "../styles/Contact.module.css";
import Button from "./Button";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact}>
        <ContactForm />
        <section className={styles.socials}>
          <p className={styles.title}>Socials</p>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/AlanGiavino"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <RiGithubLine color="white" size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/alan-giavino/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <RiLinkedinLine color="white" size={40} />
            </a>
            <a href="mailto:alangiavino97@gmail.com" aria-label="Email">
              <AiOutlineMail color="white" size={40} />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;