/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";

import ProjectImage from "../../components/ProjectImage";

import projects from "../../projects.json";
import styles from "../../styles/Project.module.css";
import ProjectInfo from "../../components/ProjectInfo";

export default function Home({ project }) {
  const [imageToShow, setImageToShow] = useState(project.pictures[0]);

  const handleImageClick = (img) => {
    setImageToShow(img);
  };

  return (
    <>
      <Head>
        <title>{project.name || "Projects"} | Alan Giavino</title>
      </Head>
      <main className={styles.container}>
        <ProjectImage
          name={project.name}
          pictures={project.pictures}
          imageToShow={imageToShow}
          handleImageClick={handleImageClick}
          placeholder={project.placeholder}
        />
        <ProjectInfo project={project} />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const project = projects.find((project) => project.id === Number(id));

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: String(project.id) },
  }));

  return { paths, fallback: "blocking" };
}
