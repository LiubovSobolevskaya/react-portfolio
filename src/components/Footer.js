import React from 'react';
import kaggle from '../assets/kaggle.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedIn.png';

const styles = {
    footer: {
        background: '#C1D37F',
        bottom: '0',
        left: '0',
        width: '100%',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        width: '50px',
        height: '50px',
        margin: '0 10px',
        transition: 'transform 0.3s',
    },
    imageHover: {
        transform: 'scale(1.2)',
    },
    headerStyle: {
        background: 'red',
    },
    headingStyle: {
        fontSize: '100px',
    },
    linksUl: {
        fontSize: '20px',
        listStyleType: 'none',
        textDecoration: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '10px',
    },
    linksLi: {
        display: 'inline',
        fontSize: '20px',
        color: 'white',
    },
    linksA: {
        display: 'inline',
        fontSize: '20px',
        color: 'white',
    },
};

const images = [
    { name: 'GitHub', path: github, url: 'https://github.com/LiubovSobolevskaya' },
    { name: 'LinkedIn', path: linkedin, url: 'https://www.linkedin.com/in/liubov-sobolevskaya/' },
    { name: 'Kaggle', path: kaggle, url: 'https://www.kaggle.com/lyubovsobolevskaya' },
];

export default function Footer() {
    const handleImageHover = (e) => {
        // Event handler for image hover
        e.target.style.transform = 'scale(1.2)';
    };

    const handleImageHoverEnd = (e) => {
        // Event handler for ending image hover
        e.target.style.transform = 'scale(1)';
    };
    return (
        <div style={styles.footer}>
            <ul style={styles.linksUl}>
                {images.map((image, index) => (
                    <li key={index} className="d-inline">
                        <a href={image.url} className="text-white" target='_blank' rel="noopener noreferrer" >
                            <img
                                src={image.path}
                                alt={image.name}
                                className="img-fluid"
                                style={styles.image}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageHoverEnd}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
