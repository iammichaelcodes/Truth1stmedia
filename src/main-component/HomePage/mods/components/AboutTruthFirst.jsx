import React from 'react';
import styled from 'styled-components';

// --- Styled Components --- //

const PageSection = styled.section.attrs({
    // Add Bootstrap padding utility class for vertical spacing
    className: 'py-5' // p = padding, y = top/bottom, 5 = spacing scale
})`
  background-color: #f8f9fa; /* Light gray background, adjust if needed */
  color: #212529; /* Dark text color */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ContentContainer = styled.div.attrs({
    // Bootstrap container class for centered content with max-width
    className: 'container'
})`
    // Add any specific container overrides here if needed
`;

const HeaderWrapper = styled.div.attrs({
    // Center text and add bottom margin
    className: 'text-center mb-5' // mb = margin-bottom, 5 = spacing scale
})``;

const MainHeading = styled.h1`
  font-size: 2.8rem; /* Adjust size as needed */
  font-weight: 700; /* Bold */
  margin-bottom: 0.75rem; /* Space between heading and subheading */
  color: #000000; /* Black heading */

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.9rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  color: #555; /* Medium gray for subheading */
  line-height: 1.6;
  max-width: 600px; /* Limit width for better readability */
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

// Using Bootstrap's row and column system for the two-column layout
// No specific styled component needed for the row itself, just use className

const AboutContentWrapper = styled.div.attrs({
    // Make items align vertically centered within the row
    className: 'align-items-center'
})``;


const AboutHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase; /* ABOUT is uppercase */
  color: #000000;

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #333; /* Slightly lighter than pure black */
  margin-bottom: 1.5rem; /* Space between paragraphs */

  &:last-child {
    margin-bottom: 0; /* No bottom margin on the last paragraph */
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #e0e0e0; /* Light gray placeholder background */
  position: relative;
  width: 100%;
  padding-top: 100%; /* Creates a square aspect ratio */
  border-radius: 0.375rem; /* Slight rounding */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%; /* Adjust size relative to placeholder */
  height: auto;
  fill: #aaaaaa; /* Darker gray for the triangle icon */
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

        {/* Using Bootstrap Row for the two-column layout */}
        {/* 'row' is the flex container, 'col-lg-6' defines columns */}
        {/* 'align-items-center' vertically aligns items in the row */}
        <div className="row align-items-center">

          {/* Left Column: Text Content */}
          {/* On large screens (lg) and up, takes 6/12 columns. Stacks below lg. */}
          <div className="col-lg-6">
            <AboutHeading>ABOUT</AboutHeading>
            <AboutParagraph>
              TruthFirst Media LLC operate four channels on X (formerly Twitter), to deler sharp, satirical commentary in both English and Spanish.
            </AboutParagraph>
            <AboutParagraph>
              Targeting corruption, extremism, and political absurdity.
            </AboutParagraph>
          </div>

          {/* Right Column: Image Placeholder */}
          {/* Takes the other 6/12 columns on lg+. */}
          {/* 'mt-4 mt-lg-0' adds margin-top on smaller screens when stacked, but none on large+ */}
          <div className="col-lg-6 mt-4 mt-lg-0 p-1 ">
          <img height={400} src="/images/truth_first_banner.jpg" alt="" />
          
          </div>

        </div> {/* End .row */}

      </ContentContainer>
    </PageSection>
    
  );
}

