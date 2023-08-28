import '../assets/styles.scss';
import NavBar from '../navbar/Navbar';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Layout = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  const mainContainerClassNames = classNames({
    ['main-container']: true,
    ['isLoaded']: loaded,
  });

  return (
    <main className={mainContainerClassNames}>
      <div className="main-container-inner">
        <div className="border top-left"></div>
        <div className="border bottom-right"></div>
        <div className="inner-container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Layout;
