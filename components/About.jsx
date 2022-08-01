import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.image}>
        <a>
          <img src="/Photo.png" alt="Photo" />
        </a>
      </div>
      <div className={styles.content}>
        <p>
          I&apos;m<a> Alan Giavino </a>, a self-taught Full Stack
          Developer highly passionate and professional. My passion has always
          been software development, but above all, that it has an attractive
          design, that hooks whoever uses it and that makes your experience an
          unforgettable memory. If you are interested in working with me or
          hiring me, you can contact me through my email or my social networks.
          I'm excited that we create the applications of the future!
        </p>
      </div>
    </section>
  );
};

export default About;
