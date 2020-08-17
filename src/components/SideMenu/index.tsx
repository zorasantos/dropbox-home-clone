import React, { useEffect, useState } from 'react';
import { Container } from './styles';

const scrollThreshold = 300;

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrolly, setScrolly] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolly(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    isActive ? 'open' : '',
    scrolly <= scrollThreshold ? 'scrollOpen' : ''
  ];

  const classOpen = classes.join(' ').trim();

  function toggleActiveMenu() {
    setIsActive(prev => !prev)
  }

  window.toggleActiveMenu = toggleActiveMenu

  return (
    <Container className={classOpen} >{ children }</Container>
  );
}

export default SideMenu;