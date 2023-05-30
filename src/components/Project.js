import React from 'react';
const styles = {
    projectImage: {
        width: "300px", /* Adjust the width to your desired size */
        height: "200px", /* Adjust the height to your desired size */
        objectFit: "cover", /* Maintain aspect ratio and crop if necessary */
    }
}
function Project({ image, title, deployedLink, githubLink }) {
    return (
        <div>
            <img style={styles.projectImage} src={image} alt={title} />
            <h3>{title}</h3>
            <p>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed Application
                </a>
            </p>
            <p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
            </p>
        </div>
    );
}

export default Project;
