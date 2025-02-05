import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>HANNAH MACBRYDE</h1>
            <h2 className={styles.secondTitle}>UX DEVELOPER</h2>
        </div>
        <img src={getImageUrl("hero/heroImage-grey.png")} alt="Hero" className={styles.heroImg} />
    </section>;
};