import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../config';
import { IconLogo } from './icons';

interface MenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const StyledMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  
  ol {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    counter-reset: item 0;
    
    li {
      margin: 0;
      position: relative;
      counter-increment: item 1;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      
      a {
        display: block;
        padding: 10px;
        color: ${({ theme }) => theme.colors.text};
        text-align: center;
        
        &:before {
          content: '0' counter(item) '.';
          text-align: right;
          counter-increment: item;
          margin-right: 10px;
          color: ${({ theme }) => theme.colors.primary};
        }
        
        &:hover, &:focus {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    position: relative;
    z-index: 10;
    
    .ham-box {
      position: relative;
      width: 30px;
      height: 24px;
      
      .ham-box-inner {
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.text};
        transition: transform 0.3s;
        
        &.active {
          transform: rotate(45deg);
          
          &:before {
            transform: rotate(90deg);
          }
          
          &:after {
            transform: rotate(90deg);
          }
        }
        
        &:before, &:after {
          content: '';
          position: absolute;
          width: 30px;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.text};
          transition: transform 0.3s;
        }
        
        &:before {
          top: -10px;
        }
        
        &:after {
          bottom: -10px;
        }
      }
    }
  }
`;

const Menu: React.FC<MenuProps> = ({ menuOpen, toggleMenu }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <StyledMenu>
      <MenuButton onClick={toggleMenu} aria-label="Menu">
        <div className="ham-box">
          <div className={`ham-box-inner ${menuOpen ? 'active' : ''}`} />
        </div>
      </MenuButton>
      
      <AnimatePresence>
        {menuOpen && (
          <MenuContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url} onClick={toggleMenu}>
                        {name}
                      </Link>
                    </li>
                  ))}
              </ol>
            </MenuLinks>
          </MenuContainer>
        )}
      </AnimatePresence>
    </StyledMenu>
  );
};

export default Menu;
