import React, { useEffect } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

    useEffect(() => {
        window.addEventListener('scroll', reveal);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);

    const reveal = () => {
        var reveals = document.querySelectorAll(`.${styles.reveal}`);

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add(styles.active);
            } else {
                reveals[i].classList.remove(styles.active);
            }
        }
    };

    return (
        <section className={`${styles.container} ${styles.reveal}`} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};