import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import Nav from './nav';
import Footer from './footer';
import ThemeToggle from './ThemeToggle';
import ScrollToTop from './ScrollToTop';
import LoadingSpinner from './LoadingSpinner';

const MainContent = styled(motion.main)`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 0 2rem;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Layout = ({ children, location }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <meta name="description" content="Personal portfolio website" />
        <meta name="theme-color" content={theme.colors.primary} />
      </Helmet>
      
      <LayoutWrapper>
        <Nav />
        <ThemeToggle />
        <AnimatePresence mode="wait">
          <MainContent
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {isLoading ? (
              <LoadingSpinner text="Loading portfolio..." />
            ) : (
              <ContentWrapper>
                {children}
              </ContentWrapper>
            )}
          </MainContent>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout; 