import React from 'react';
import styled from 'styled-components';

// --- Styled Components --- //

const PageSection = styled.section.attrs({
  className: 'py-5',
})`
  background-color: #f8f9fa;
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ContentContainer = styled.div.attrs({
  className: 'container',
})``;

const HeaderWrapper = styled.div.attrs({
  className: 'text-center mb-5',
})``;

const MainHeading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.9rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const AboutHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: #000000;

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 0.375rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// --- React Component --- //

export function AboutTruthFirst() {
  return (
    <PageSection>
      <ContentContainer>
        <HeaderWrapper>
          <MainHeading>TruthFirst Media LLC</MainHeading>
          <SubHeading>
            Independent political satire and anti-corruption commentaries.
          </SubHeading>
        </HeaderWrapper>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <AboutHeading>ABOUT</AboutHeading>
            <AboutParagraph>
              TruthFirst Media LLC operate four channels on X (formerly Twitter), to deliver sharp, satirical commentary in both English and Spanish.
            </AboutParagraph>
            <AboutParagraph>
              Targeting corruption, extremism, and political absurdity.
            </AboutParagraph>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0 p-1">
            <StyledImage src="/images/truth_first_banner.jpg" alt="Truth First Banner" />
          </div>
        </div>
      </ContentContainer>
    </PageSection>
  );
}
