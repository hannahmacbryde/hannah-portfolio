import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <footer id="contact" className={`${styles.container} ${styles.reveal}`}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:hannahmacbryde@hotmail.co.uk">hannahmacbryde@hotmail.co.uk</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/hannah-macbryde-444a83b1/">https://www.linkedin.com/in/hannah-macbryde-444a83b1/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/git.png")} alt="gitHuub icon" />
                <a href="https://github.com/hannahmacbryde">https://github.com/hannahmacbryde/</a>
            </li>
        </ul>
    </footer>;
};