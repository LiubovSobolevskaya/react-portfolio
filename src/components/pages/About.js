import React from 'react';
import photo from '../../assets/photo.jpg';

const styles = {
  image: {
    margin: '20px',
    borderRadius: '5%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  paragraph: {
    fontSize: '20px',
    lineHeight: '1.6',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default function About() {
  return (
    <div>
      <h1 style={styles.h1}>About Me</h1>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <img src={photo} className="img-fluid" alt="Profile" style={styles.image} />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <p style={styles.paragraph}>
            Looking for a challenging and dynamic position in a reputable organization where my skills and abilities can be utilized to their fullest potential, while also providing me with opportunities for professional and personal growth. I am eager to apply my experience and knowledge in a collaborative environment, while also learning and adapting to new challenges and responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
}
