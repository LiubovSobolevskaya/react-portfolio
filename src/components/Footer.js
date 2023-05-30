import React from 'react';
import kaggle from '../assets/kaggle.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedIn.png';
const styles = {
    footer: {
        background: 'rgb(242, 177, 234)',
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
    { name: 'GitHub', path: github },
    { name: 'LinkedIn', path: linkedin },
    { name: 'Kaggle', path: kaggle },
];


export default function Footer() {
    return (
        <div style={styles.footer}>
            <ul style={styles.linksUl}>
                {images.map((image, index) => (
                    <li key={index} className="d-inline">
                        <a href="#" className="text-white">
                            <img src={image.path} alt={image.name} className="img-fluid" style={styles.image} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
