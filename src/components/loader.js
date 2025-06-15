import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;

const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const StyledLogo = styled.div`
  width: max-content;
  max-width: 300px;
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    user-select: none;
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.loader img',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        opacity: [0, 1],
        scale: [0.8, 1],
      })
      .add({
        targets: '.loader img',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <StyledLogo isMounted={isMounted}>
        <img src="/logo.png" alt="Logo" />
      </StyledLogo>
    </StyledContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
