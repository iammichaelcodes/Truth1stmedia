import React from 'react';
import styled from 'styled-components';

// --- Image Icon Components ---

const DollarIconSVG = ({ size = '100%', style = {} }) => (
  <img
    src="/images/anti_shify.png"
    alt="Dollar Icon"
    style={{ width: size, height: size, display: 'block', ...style }}
  />
);

const FaceIconSVG = ({ size = '100%', style = {} }) => (
  <img
    src="/images/icon2-removebg-preview.png"
    alt="Face Icon"
    style={{ width: size, height: size, display: 'block', ...style }}
  />
);

// --- Styled Components ---

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: #f5f0e1;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;  /* Centering items horizontally */
    justify-content: flex-start;  /* Aligning items at the top of the container */
    gap: 1rem;
    width: 100%;  /* Ensuring that the container takes full width */
  }

`;

const SocialLinkItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e2a33;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const IconCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #1e2a33;
  color: #e0d9c7;
  margin-right: 0.75rem;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }
`;

const LinkText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

// --- Component ---

export const Channels = () => {
  return (
    <Container>
      <SocialLinks>
        <SocialLinkItem href="#" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <DollarIconSVG />
          </IconCircle>
          <LinkText>@TheAntiShifty</LinkText>
        </SocialLinkItem>

        <SocialLinkItem href="#" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <FaceIconSVG />
          </IconCircle>
          <LinkText>AMemeSenseMD</LinkText>
        </SocialLinkItem>

        <SocialLinkItem href="#" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <DollarIconSVG />
          </IconCircle>
          <LinkText>@CazoAntiShiftyES</LinkText>
        </SocialLinkItem>
      </SocialLinks>
    </Container>
  );
};
