import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

Modal.setAppElement('#root');

export const ProjectCard = ({ 
    project: { title, imageSrc, description, skills, videoLink, projectLink }
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`Show ${title}`} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                {projectLink && (
                    <a href={projectLink} className={styles.demoLink} target="_blank" rel="noopener noreferrer">View Project</a>
                )}
                
                {videoLink && (
                    <a href="#!" onClick={openModal} className={styles.link}>Watch Video</a>
                )}
            </div>
            
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Video Demo"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <button onClick={closeModal} className={styles.closeButton}>X</button>
                <div className={styles.videoContainer}>
                    <video controls width="100%">
                        <source src={videoLink} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Modal>
        </div>
    );
};
