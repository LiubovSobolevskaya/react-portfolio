import React from 'react';

const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
}
export default function Resume() {
  return (
    <div>
      <h1 className="text-center" style={styles.h1} >Resume</h1>
      <p>
        <a href="../../assets/path/to/ResumeSobolevskaya_WD.pdf" download>
          Download Resume
        </a>
      </p>
    </div>
  );
}