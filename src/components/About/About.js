import React, { useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutData from "../../data/aboutme.json";

export const About = () => {
    useEffect(() => {
        window.addEventListener('scroll', reveal);
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
        <section className={`${styles.container} ${styles.reveal}`} id="about">
            <h2 className={styles.title}>Who? Me?!</h2>
            <div className={styles.textCntent}>
                <div className={styles.content}>
                    <p className={styles.mainAboutCopy}>{aboutData.mainAboutCopy}</p>
                    <h4>Random Pointers</h4>
                    <ul className={styles.aboutItems}>
                        {aboutData.aboutItems.map((item, index) => (
                            <li key={index} className={styles.aboutItem}>
                                <p>
                                    {item.text}{" "}
                                    <span className={styles.impText}>{item.highlight}</span>{" "}
                                    {item.extra && item.extra}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default About;