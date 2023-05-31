import React from 'react';

const styles = {
  navTabs: {
    backgroundColor: '#F9D4BB',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  h1: {
    fontSize: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#664E4C',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  navLink: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#664E4C',
    fontFamily: 'Verdana, sans-serif',
    margin: '20px',
  },
  activeNavLink: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#664E4C',
    fontFamily: 'Helvetica, Arial, sans-serif',
    margin: '20px',
    fontWeight: 'bold',
  },
  navigation: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '200px',
    alignItems: 'right',
    justifyContent: 'right',
  }
};


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.navTabs}>
      <h1 style={styles.h1}>Liubov Sobolevskaya</h1>
      <div style={styles.navigation}>
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
