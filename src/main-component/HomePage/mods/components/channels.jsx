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

const SocialLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  margin-top: 100px;
  background-color: #f5f0e1;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const SocialLinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #1e2a33;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const IconCircle = styled.span`
  display: inline-flex;
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
    <SocialLinksContainer>
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
    </SocialLinksContainer>
  );
};
