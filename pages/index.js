import Head from "next/head";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import projects from "../projects.json";
import About from "../components/About";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Alan Giavino</title>
      </Head>
      <main>
        <Hero />
        <Separator id="about" text="About me" />
        <About />
        <Separator id="my-projects" text="My projects" />
        <MyProjects projects={projects} />
        <Separator id="contact-me" text="Contact me" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { projects },
  };
}
