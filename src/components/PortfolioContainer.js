import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const styles = {
  all: {
    background: '#F0E2A3',
  },
  container: {

    minHeight: 'calc(100vh - 100px)',
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.all}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div style={styles.container}>{renderPage()}</div>
      <Footer />
    </div>
  );
}
