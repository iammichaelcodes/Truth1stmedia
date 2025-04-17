import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const PageWrapper = styled.div`
  max-width: 900px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center the content */
  padding: 3rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* Example font stack */
  
  background-color: whitesmoke
`;

const Header = styled.h1`
  font-size: 3.5rem; /* Adjust size */
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PaymentOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 1.5rem; /* Spacing between items */
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: stretch; /* Make items take full width */
  }
`;

const CryptoOptions = styled.div`
  display: flex;
  align-items: flex-end; /* Align icons/text and button */
  gap: 1.5rem;
  flex-wrap: wrap; /* Allow icons to wrap if needed */

   @media (max-width: 768px) {
    justify-content: center; /* Center icons */
    width: 100%;
    margin-bottom: 1rem; /* Add space below crypto when stacked */
  }
`;

const CryptoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  color: #495057;

  svg {
    width: 40px; /* Adjust icon size */
    height: 40px;
    margin-bottom: 0.5rem;
    color: #212529; /* Icon color */
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid #adb5bd;
  border-radius: 0.375rem; /* Bootstrap's default rounded corners */
  background-color: #ffffff;
  color: #212529;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, color 0.15s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #f8f9fa;
    border-color: #8a939b;
  }

  /* Add some margin if needed, especially when stacked */
  @media (max-width: 768px) {
      width: 100%; /* Full width buttons on small screens */
  }
`;

const PaymentButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Space between PayPal and Credit Card */

   @media (max-width: 768px) {
      width: 100%; /* Full width container on small screens */
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #dee2e6; /* Light gray divider */
  margin: 3rem 0; /* Space above and below */
`;

const TiersSectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: red;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const TiersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  gap: 1.5rem; /* Space between cards */
`;

const TierCard = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: center; /* Center title and amount */
`;

const TierTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.5rem;
`;

const TierAmount = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #495057;
`;

const TierPerksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left; /* Align perks text left */
  font-size: 0.95rem;
  color: #495057;
  flex-grow: 1; /* Allow list to grow to push footer content down if needed */
`;

const TierPerkItem = styled.li`
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.2em; /* Space for the bullet */

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #212529; /* Bullet color */
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;



// Placeholder for ANTY - replace with actual SVG
const AntyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="40" height="40">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">?</text>
    </svg>
);


// --- Donation Tier Data ---
const donationTiers = [
  {
    title: 'Truth Supporter',
    amount: '$50+ USD',
    perks: ['Receive exclusive updates'],
  },
  {
    title: 'Meme Patron',
    amount: '$250+ USD',
    perks: ['Receive exclusive updates', 'Early access to new drops'],
  },
  {
    title: 'Resistance Champion',
    amount: '$1,000+ USD',
    perks: [
      'Receive exclusive updates',
      'Early access to new drops',
      'Name listed on Wall of Memes',
    ],
  },
];


// --- React Component ---

export function DonationPage() {
  return (
    <PageWrapper>
      <Header>
        Support truth.<br /> {/* Use <br> if line break is intentional */}
        Fund the mission.
      </Header>

      {/* --- Payment Options --- */}
      <PaymentOptionsWrapper className="mb-5 ml-4"> {/* Bootstrap margin bottom */}
        <CryptoOptions>
          <div className="d-block">
          <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-md-start"> {/* Bootstrap flex utilities */}
            <CryptoItem>
              <img height={60} src='images/bitcoin.png'></img>
              {/* <BtcIcon /> */}
              BTC
            </CryptoItem>
            <CryptoItem>
              <img height={60} src='images/ethereum-eth-logo.png'></img>
              {/* <EthIcon /> */}
              ETH
            </CryptoItem>
            <CryptoItem>
              <img height={60} src='images/solana.png'></img>
              {/* <SolIcon /> */}
              SOL
            </CryptoItem>
            <CryptoItem>
              <img height={60} src='images/anti_shifty_logo_inv.png'></img>
              {/* <AntyIcon /> */}
              ANTY
            </CryptoItem>
          </div>
          </div>
          {/* Use ms-md-auto for margin start auto on medium+ screens if needed, depends on exact layout goal */}
          
        
          <Button className="mt-3 mt-md-0 d-block"> {/* Bootstrap margin top */}
              COPY ADDRESS
          </Button>
        </CryptoOptions>

        <PaymentButtons>
          <Button>PayPal</Button>
          <Button>Credit Card</Button>
        </PaymentButtons>
      </PaymentOptionsWrapper>

      <Divider />

      {/* --- Donation Tiers --- */}
      <TiersSectionTitle><h1>Donation Tiers</h1></TiersSectionTitle>

      {/* <h1></h1> */}

      <TiersGrid>
        {donationTiers.map((tier, index) => (
          <TierCard key={index}>
           <TierTitle><h1>{tier.title}</h1></TierTitle> 
            <TierAmount>{tier.amount}</TierAmount>
            <TierPerksList>
              {tier.perks.map((perk, perkIndex) => (
                <TierPerkItem key={perkIndex}>{perk}</TierPerkItem>
              ))}
            </TierPerksList>
          </TierCard>
        ))}
      </TiersGrid>
    </PageWrapper>
  );
}
