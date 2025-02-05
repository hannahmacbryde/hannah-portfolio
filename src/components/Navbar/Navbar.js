import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/blackCloseIcon.png")
                    : getImageUrl("nav/blackMenuIcon.png")
                    } 
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)} 
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                  <li><a href="/han-cv2024.pdf" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">CV</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};