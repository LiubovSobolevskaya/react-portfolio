import React from 'react';

function Project({ image, title, deployedLink, githubLink }) {
    return (
        <div>
            <img src={image} alt={title} />
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
