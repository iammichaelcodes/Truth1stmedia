import React from 'react';
import styled from 'styled-components';

// --- SVG Icons ---

// Dollar Sign SVG (Approximation)
const DollarIconSVG = ({ size = '145%', color = 'currentColor', ...props }) => (
  <img
    width={size}
    height={size}
    src="/images/anti_shify.png"
    viewBox="0 0 16 16" // ViewBox might need adjustment based on actual SVG
    fill={color}
    
    style={{ display: 'block', ...props.style }} // display: block helps remove extra space
  >
    {/* Example Path - Replace with your actual accurate SVG path */}
   
  </img>
);

// Face/Meme Icon SVG (Approximation)
const FaceIconSVG = ({ size = '120%', color = 'currentColor', ...props }) => (
  
  <img
    width={size}
    height={size}
    src="/images/icon2-removebg-preview.png"
    viewBox="0 0 16 16" // ViewBox might need adjustment based on actual SVG
    fill={color}
    
    style={{ display: 'block', ...props.style }} // display: block helps remove extra space
  >
    {/* Example Path - Replace with your actual accurate SVG path */}
   
  </img>
   
);


// --- Styled Components ---

const SocialLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Vertically align items */
  padding: 1rem 2rem; /* Padding around the container */
  margin-top:100px;
  background-color: #f5f0e1; /* Light background color from image */
  gap: 2rem 2.5rem; /* Row gap and Column gap */
  min-height: 60px; /* Give it some min height */
`;

const SocialLinkItem = styled.a` /* Use an anchor tag for links */
  display: inline-flex; /* Use inline-flex to keep icon and text together */
  align-items: center; /* Vertically align icon and text */
  text-decoration: none; /* Remove default link underline */
  color: #1e2a33; /* Dark text color from image */
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8; /* Slight hover effect */
  }
`;

const IconCircle = styled.span`
  display: inline-flex; /* Use flex to center the SVG inside */
  align-items: center;
  justify-content: center;
  width: 40px; /* Adjust size as needed */
  height: 40px;
  border-radius: 50%; /* Make it a circle */
  background-color: #1e2a33; /* Dark background for the circle */
  color: #e0d9c7; /* Light color for the icon SVG inside */
  margin-right: 0.75rem; /* Space between icon and text */
  flex-shrink: 0; /* Prevent icon from shrinking */
`;

const LinkText = styled.span`
  font-size: 1rem; /* Adjust font size as needed */
  font-weight: 500; /* Slightly bold */
  line-height: 1.2;
`;

// --- React Component ---

export const Channels = () => {
  return (
    <SocialLinksContainer>
      <SocialLinkItem href="#" target="_blank" rel="noopener noreferrer">
        <IconCircle>
          {/* Adjust size prop passed to SVG if needed */}
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

// export default SocialLinksBar;