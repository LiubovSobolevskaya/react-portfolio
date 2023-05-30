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
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                <img style={styles.projectImage} src={image} alt={title} />
            </a>
            <h3>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
        </div>
    );
}

export default Project;
