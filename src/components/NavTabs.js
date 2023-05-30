import React from 'react';

const styles = {
  navTabs: {
    backgroundColor: '#F0E2A3',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '40px',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
    color: '#664E4C',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  navLink: {
    textDecoration: 'none',
    color: '#664E4C',
    fontFamily: 'Verdana, sans-serif',
    margin: '0 10px',
  },
  activeNavLink: {
    textDecoration: 'none',
    color: '#664E4C',
    fontFamily: 'Helvetica, Arial, sans-serif',
    margin: '0 10px',
    fontWeight: 'bold',
  },
};


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.navTabs}>
      <h1 style={styles.h1}>Liubov Sobolevskaya</h1>
      <div>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'active' : ''}
          style={currentPage === 'About' ? styles.activeNavLink : styles.navLink}
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'active' : ''}
          style={currentPage === 'Portfolio' ? styles.activeNavLink : styles.navLink}
        >
          Portfolio
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'active' : ''}
          style={currentPage === 'Resume' ? styles.activeNavLink : styles.navLink}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active' : ''}
          style={currentPage === 'Contact' ? styles.activeNavLink : styles.navLink}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavTabs;
