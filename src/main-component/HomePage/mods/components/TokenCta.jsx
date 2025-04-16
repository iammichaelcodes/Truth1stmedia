import React from 'react';
import styled, { css } from 'styled-components';

// --- SVG Icons (as simple functional components) ---

const ArrowRightIcon = ({ size = '1em', color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ verticalAlign: 'middle', ...props.style }} // Basic alignment
  >
    <path
      fillRule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    />
  </svg>
);

const ShoppingBagIcon = ({ size = '1em', color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ verticalAlign: 'middle', ...props.style }}
  >
      {/* Basic Bag Outline */}
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      {/* Placeholder for inner logo - just a circle */}
      <circle cx="8" cy="9.5" r="1.5" />
  </svg>
);

const SearchIcon = ({ size = '1em', color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ verticalAlign: 'middle', ...props.style }}
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
);


// --- Styled Components ---

const GridContainer = styled.div`
  
  display: grid;
  /* grid-template-columns: repeat(12, 1fr); */ /* Bootstrap-like 12 col grid if needed */
  grid-template-columns: 7fr 5fr; /* Approx 7/12 and 5/12 split */
  grid-template-rows: auto auto; /* Two rows, height determined by content */
  gap: 1rem; /* Spacing between grid items */
  margin-top:10px;
  padding: 2rem; /* Padding around the entire grid */
  background-color: #f5f0e1; /* Light background for the page */
  min-height: 100vh; /* Ensure it takes at least viewport height */

  /* Responsive: Stack columns on smaller screens */
  @media (max-width: 991px) { /* Below Large screens */
     grid-template-columns: 1fr; /* Single column */
     grid-template-rows: auto auto auto auto; /* Adjust rows as needed */
  }
`;

// Base card style
const StyledCard = styled.div`
  background-color: #1e2a33; /* Dark background */
  color: #e0d9c7; /* Off-white text */
  padding: 1.5rem 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 150px; /* Give cards a minimum height */
  height: 100%; /* Try to fill grid cell height */
  box-sizing: border-box; /* Include padding in height/width */
`;

// Specific card for Memes with background
const MemeCard = styled(StyledCard)`
  grid-column: 1 / 2; /* Start col 1, end before col 2 */
  grid-row: 1 / 2; /* Start row 1, end before row 2 */

  /* --- IMPORTANT: Replace with your actual image path --- */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/meme-background.jpg');
  background-size: cover;
  background-position: center;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: bold;
    line-height: 1.2;
    margin: 0;
  }

  @media (max-width: 991px) {
    grid-column: 1 / 2; /* Takes full width */
    grid-row: 1 / 2; /* First item */
  }
`;

// Container for stacking cards in the top-right grid cell
const TopRightStack = styled.div`
  grid-column: 2 / 3; /* Second column */
  grid-row: 1 / 2; /* First row */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between stacked cards */
  height: 100%; /* Fill the grid cell height */

  @media (max-width: 991px) {
    grid-column: 1 / 2; /* Takes full width */
    grid-row: 2 / 3; /* Second item */
    /* Adjust height behavior if needed on mobile */
  }
`;

// Card for the Token (inside TopRightStack)
const TokenCard = styled(StyledCard)`
  /* No specific grid placement needed, relies on parent stack */
  justify-content: space-between; /* Push content apart vertically */
`;

// Card for Top Merch Store (inside TopRightStack)
const MerchTopCard = styled(StyledCard)`
  /* No specific grid placement needed, relies on parent stack */
  justify-content: space-between;
`;

// Card for Bottom Merch Store
const MerchBottomCard = styled(StyledCard)`
  grid-column: 1 / 2; /* First column */
  grid-row: 2 / 3; /* Second row */
  justify-content: space-between;

  @media (max-width: 991px) {
    grid-column: 1 / 2; /* Takes full width */
    grid-row: 3 / 4; /* Third item */
  }
`;

// Card for Reports
const ReportsCard = styled(StyledCard)`
  grid-column: 2 / 3; /* Second column */
  grid-row: 2 / 3; /* Second row */
  justify-content: flex-start; /* Align content to top */

  @media (max-width: 991px) {
    grid-column: 1 / 2; /* Takes full width */
    grid-row: 4 / 5; /* Fourth item */
  }
`;


// Shared text styles
const CardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.3;
`;

const CardSubText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #b0a99a; /* Slightly dimmer */
  flex-grow: 1; /* Allow subtext to take up space if needed */
`;

// Style for links, can contain text or icons
const CardLink = styled.a`
  color: #e0d9c7;
  text-decoration: none;
  align-self: flex-start; /* Align link to the start */
  /* margin-top: auto; Push towards bottom if space available */
  transition: color 0.2s ease-in-out;
  display: inline-block; /* Ensure it behaves well with icons/text */

  &:hover {
    color: #ffffff;
  }

  /* Style for the text-based arrow suffix */
  &.text-arrow::after {
    content: ' >';
    font-weight: bold;
    margin-left: 0.25em;
  }
`;

// Wrapper specifically for icons if more complex styling is needed
const IconWrapper = styled.span`
  font-size: 1.8rem; /* Control icon base size */
  display: inline-block; /* Ensure proper spacing */
  vertical-align: middle;
  line-height: 1; /* Prevent extra line height */

  &.inline-icon {
    margin-right: 0.8rem; /* Space next to icon when inline */
    font-size: 1.5rem; /* Slightly smaller when next to title */
  }

  &.top-right-icon {
      float: right; /* Simple way to push icon right */
      margin-left: 0.5rem; /* Space from title */
  }
`;

// Specific styling for the 'S' logo approximation
const SLogo = styled.span`
  font-family: serif; /* Or a specific display font if available */
  font-size: 3rem;
  font-weight: bold;
  margin-right: 0.5rem;
  line-height: 1;
  display: inline-block;
  vertical-align: top; /* Align with top of title text */
`;


// --- React Component ---

export const TokenCta = () => {
  return (
    <GridContainer>

      {/* Card 1: Meme */}
      <MemeCard>
        {/* Content already centered by styled component */}
        <h2>SHOW US<br />YOUR MEMES</h2>
      </MemeCard>

      {/* Stacking container for top-right */}
      <TopRightStack>
        {/* Card 2: Token */}
        <TokenCard>
          <div> {/* Group title and subtext */}
             <CardTitle>$ANTY TOKEN</CardTitle>
             <CardSubText>Governance. Reports, & Rewards</CardSubText>
          </div>
          <CardLink href="#">
            <ArrowRightIcon size="1.5em" />
          </CardLink>
        </TokenCard>

        {/* Card 3: Merch (Top) */}
        <MerchTopCard>
           <div> {/* Group title and icon */}
               <IconWrapper className="top-right-icon">
                  <ShoppingBagIcon />
               </IconWrapper>
               <CardTitle style={{ display: 'inline-block', verticalAlign: 'top' }}> {/* Inline block to allow icon float */}
                  MERCH STORE
               </CardTitle>
            </div>
            <CardLink href="#" className="text-arrow">
              Limited edition satire gear
            </CardLink>
        </MerchTopCard>
      </TopRightStack>


      {/* Card 4: Merch (Bottom) */}
      <MerchBottomCard>
        <div> {/* Group logo/title and subtext */}
          {/* Use flex for inline alignment of logo and title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <SLogo>S</SLogo>
            <CardTitle style={{ marginBottom: 0 /* Remove default margin */ }}>IIMERC<br />STORE</CardTitle>
          </div>
          <CardSubText>Limited edition satire gear</CardSubText>
        </div>
        <CardLink href="#">
           <ArrowRightIcon size="1.5em" />
        </CardLink>
      </MerchBottomCard>


      {/* Card 5: Reports */}
      <ReportsCard>
          {/* Use flex for inline alignment */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <IconWrapper className="inline-icon">
                  <SearchIcon />
              </IconWrapper>
              <CardTitle style={{ marginBottom: 0 }}>REPORTS &<br />INVESTIGATIONS</CardTitle>
          </div>
          <CardSubText>Access exclusive investigative content</CardSubText>
          {/* No link/arrow needed here */}
      </ReportsCard>

    </GridContainer>
  );
};

// export default PromoGrid;