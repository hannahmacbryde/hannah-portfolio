import React, { useEffect } from "react";

import styles from "./Experience.module.css";
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from "../../utils";

export const Experience = () => {

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


    return <section className={`${styles.container} ${styles.reveal}`} id="experience">
        <div className={styles.content}>
            <div className={styles.exp}>
                <h4>Current Tech Stack</h4>
                <div className={styles.skills}>{
                    skills.map((skill, id) => { 
                        return <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        })
                }</div>
            </div>
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                            <div className={styles.historyItemDetails}>
                                <h3 className={styles.impText}>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <p>{`Previous Title's:`}</p>
                                <ul>{historyItem.previousTitles.map((prevTitle, id) => {
                                    return <li key={id}>{prevTitle}</li>
                                })}</ul><br></br>
                                <p>{`Tasks:`}</p>
                                <ul>{historyItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                                })}</ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>;
};