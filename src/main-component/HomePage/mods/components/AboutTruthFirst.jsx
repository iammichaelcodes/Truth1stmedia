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
  line-height: 1.6;
  text-align: left;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.75rem;

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
          {/* Image first on small screens, text first on large */}
          <div className="col-lg-6 order-1 order-lg-2 mt-4 mt-lg-0 p-1">
            <StyledImage src="/images/truth_first_banner.jpg" alt="Truth First Banner" />
          </div>

          <div className="col-lg-6 order-2 order-lg-1">
            <AboutParagraph><strong>Organization Name:</strong> TruthFirst Media LLC</AboutParagraph>
            <AboutParagraph><strong>Owned Channels on X (formerly Twitter):</strong></AboutParagraph>
            <AboutParagraph>• <strong>@theantishifty</strong> – Political satire, anti-corruption, global finance commentary.</AboutParagraph>
            <AboutParagraph>• <strong>@memesensemd</strong> – Satirical insights, diagnosing and exposing ideological extremism.</AboutParagraph>
            <AboutParagraph>• <strong>@theantishiftyes</strong> – Spanish-language satire, anti-corruption, political commentary.</AboutParagraph>
            <AboutParagraph>• <strong>@cazopendejoss</strong> – Spanish-language cultural satire, exposing stupidity across ideologies.</AboutParagraph>
            <AboutParagraph>• <strong>@truthmediahq</strong> – Central hub for all TruthFirst Media updates, drops, and community alerts.</AboutParagraph>
            <AboutParagraph><strong>Additional Information:</strong> Additional channels will be introduced soon. All channels are governed by our community-driven token: <strong>$ANTY</strong>.</AboutParagraph>
            <AboutParagraph><strong>Exchange Listings – Already Live:</strong></AboutParagraph>
            <AboutParagraph>✅ Coinstore: ANTY/USDT</AboutParagraph>
            <AboutParagraph>✅ Moontok: ANTY</AboutParagraph>
            <AboutParagraph>✅ KCEX: ANTY/USDT</AboutParagraph>
            <AboutParagraph>✅ WEEX: ANTY/USDT</AboutParagraph>
            <AboutParagraph><strong>More monetization strategies</strong>, revenue-sharing details, and exciting developments will be transparently shared with our community very soon.</AboutParagraph>
          </div>
        </div>
      </ContentContainer>
    </PageSection>
  );
}
