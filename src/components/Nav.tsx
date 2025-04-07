import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { throttle } from '../utils';
import { navLinks } from '../config';
import Menu from './Menu';
import { IconLogo } from './icons';

interface NavProps {
  location: {
    pathname: string;
  };
}

interface NavLink {
  url: string;
  name: string;
}

const StyledContainer = styled(motion.header)<{ scrollDirection: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.transitions.default};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${({ scrollDirection }) => 
    scrollDirection === 'none' ? '100px' : '70px'};
  box-shadow: ${({ scrollDirection, theme }) =>
    scrollDirection === 'up' ? `0 10px 30px -10px ${theme.colors.shadow}` : 'none'};
  transform: translateY(
    ${({ scrollDirection }) => 
      scrollDirection === 'down' ? '-70px' : '0px'}
  );
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 40px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.mono};
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    width: 42px;
    height: 42px;
    
    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
  
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
    
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      
      a {
        padding: 10px;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        
        &:before {
          content: '0' counter(item) '.';
          text-align: right;
          counter-increment: item;
          margin-right: 10px;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const Nav: React.FC<NavProps> = ({ location }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTop = useRef(0);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollTop = window.pageYOffset;
      
      if (currentScrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (currentScrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else if (currentScrollTop < lastScrollTop.current) {
        setScrollDirection('up');
      } else {
        setScrollDirection('none');
      }
      
      lastScrollTop.current = currentScrollTop;
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      
      <StyledContainer
        scrollDirection={scrollDirection}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledNav>
          <StyledLogo>
            <Link to="/" aria-label="home">
              <IconLogo />
            </Link>
          </StyledLogo>
          
          <StyledLinks>
            <ol>
              {navLinks &&
                navLinks.map(({ url, name }: NavLink, i: number) => (
                  <li key={i}>
                    <Link
                      to={url}
                      className={location.pathname === url ? 'active' : ''}>
                      {name}
                    </Link>
                  </li>
                ))}
            </ol>
            
            <a
              className="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Resume
            </a>
          </StyledLinks>
          
          <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </StyledNav>
      </StyledContainer>
    </>
  );
};

export default Nav; 