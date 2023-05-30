import React from 'react';
const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },

};
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1 style={styles.h1}>Liubov Sobolevskaya</h1>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
