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
    color: '#664E4C',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  paragraph: {
    fontSize: '20px',
    lineHeight: '1.6',
    backgroundColor: '#E2D58B',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default function About() {
  return (
    <div>
      <h1 className="text-center" style={styles.h1}>About Me</h1>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <img src={photo} className="img-fluid" alt="Profile" style={styles.image} />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12" style={styles.paragraph}>
          <p >
            I am a highly motivated individual with a master's degree in Mathematics, seeking a challenging and dynamic
            position in a reputable organization. With a strong foundation in mathematical principles,
            I bring a unique analytical mindset to problem-solving. Proficient in Python, JavaScript, C/C++, SQL, and MongoDB,
            I have hands-on experience in both backend and frontend development. I am passionate about creating efficient and
            scalable solutions and have a keen eye for detail. I thrive in a collaborative environment, leveraging my skills and
            knowledge while continuously learning and adapting to new challenges and responsibilities.
            I am excited to contribute my expertise and contribute to the professional and personal growth of the organization.          </p>
        </div>
      </div>
    </div>
  );
}
