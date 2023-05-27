import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
//import logo from './logo.svg';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Home') {
      return <Portfolio />;
    }
    if (currentPage === 'Blog') {
      return <Resume />;
    }
    return <Contact />;
  };


  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Home':
  //       return <Home />;
  //     case 'About':
  //       return <About />;
  //     case 'Blog':
  //       return <Blog />;
  //     default:
  //       return <Contact />;
  //   }
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" />*/}
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
