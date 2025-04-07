import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FormattedIcon } from './icons';
import { socialMedia } from '../config';

interface GitHubInfo {
  stars: number | null;
  forks: number | null;
}

const StyledContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  height: auto;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const StyledSocial = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledSocialLink = styled.a`
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledMetadata = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1;
`;

const StyledGitHubLink = styled.a`
  color: ${({ theme }) => theme.colors.muted};
  padding: 10px;
  transition: color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 7px;
  }
  
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

const Footer: React.FC = () => {
  const [githubInfo, setGitHubInfo] = useState<GitHubInfo>({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    
    fetch('https://api.github.com/repos/FehintolaObafemi/personal-portfolio')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StyledSocial>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <StyledSocialLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}>
                  <FormattedIcon name={name} />
                </StyledSocialLink>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocial>
      <StyledMetadata tabIndex={-1}>
        <StyledGitHubLink
          href="https://github.com/FehintolaObafemi/personal-portfolio"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <div>Modifications by Fehintola O.</div>

          {githubInfo.stars && githubInfo.forks && (
            <StyledGitHubInfo>
              <span>
                <FormattedIcon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <FormattedIcon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </StyledGitHubInfo>
          )}
        </StyledGitHubLink>
      </StyledMetadata>
    </StyledContainer>
  );
};

export default Footer; 