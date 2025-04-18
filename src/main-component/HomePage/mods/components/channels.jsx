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
const CazoSvg = ({ size = '100%', style = {} }) => (
  <img
    src="/images/cazopendejoss.jpg"
    alt="Cazopendejoss Icon"
    style={{
      width: size,
      height: size,
      display: 'block',
      borderRadius: '50%',
      ...style
    }}
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
  }
`;

const SocialLinkItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e2a33;
  transition: opacity 0.2s ease-in-out;
  height: 100%;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    justify-content: flex-start;
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
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const LinkText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

// --- Component ---

export const Channels = () => {
  return (
    <Container>
      <SocialLinks>
        <SocialLinkItem href="https://x.com/TheAntishifty?t=cJh0sl58NlxdV4ig9R-4Pw&s-09" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <DollarIconSVG />
          </IconCircle>
          <LinkText>@TheAntiShifty</LinkText>
        </SocialLinkItem>

        <SocialLinkItem href="https://x.com/MemeSenseMD?t=uwbWybtZXJGVgG5dBCaqQA&s=09" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <FaceIconSVG />
          </IconCircle>
          <LinkText>@MemeSenseMD</LinkText>
        </SocialLinkItem>

        <SocialLinkItem href="https://x.com/TheAntiShiftyES?t=jvwPEu1KPM7-pOKECHmO4A&s=09" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <CazoSvg />
          </IconCircle>
          <LinkText>@CazoPendejoss</LinkText>
        </SocialLinkItem>

      
        <SocialLinkItem href="https://x.com/CazoPendejoss?t=j35ldoIKbxUvOIRy8grdnA&s=09" target="_blank" rel="noopener noreferrer">
          <IconCircle>
            <DollarIconSVG />
          </IconCircle>
          <LinkText>@AntiShiftyES</LinkText>
        </SocialLinkItem>
      </SocialLinks>
    </Container>
  );
};