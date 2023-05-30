import React from 'react';
import photo from '../../assets/photo.jpg';

const styles = {
  image: {
    margin: '10px',
    //maxWidth: '400px',
  },
};

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <img src={photo} className="img-fluid" alt="Profile" style={styles.image} />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <p style={styles.image}>
            Looking for a challenging and dynamic position in a reputable organization where my skills and abilities can be utilized to their fullest potential, while also providing me with opportunities for professional and personal growth. I am eager to apply my experience and knowledge in a collaborative environment, while also learning and adapting to new challenges and responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
}
