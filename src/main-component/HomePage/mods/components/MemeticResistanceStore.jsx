import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background-color: #121212;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  font-family: sans-serif;
  max-width: 900px;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #cccccc;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ConnectButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 1rem 0 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const HolderBenefits = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #cccccc;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const HolderTiers = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TierCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const TierIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || '#333'};
  font-size: 1.5rem;
`;

const TierDetails = styled.div`
  text-align: left;
`;

const TierTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
`;

const TierPrice = styled.p`
  margin: 0.5rem 0;
  color: #cccccc;
`;

const TierBenefit = styled.p`
  font-size: 1.1rem;
  margin: 0.25rem 0;
  font-weight: bold;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  align-items: center;
  text-align: center;
`;

const FilterButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const SortSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MerchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const MerchItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MerchImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MerchName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const MerchPrice = styled.p`
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const ViewButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  cursor: pointer;
`;

export const MemeticResistanceStore = () => {
  return (
    <Container>
      <MainTitle>Merch for the memetic resistance</MainTitle>
      <Subtitle>Unlock exclusive gear. Rep the revolution. Powered by $ANTY.</Subtitle>

      <ConnectButton>Connect Wallet</ConnectButton>

      <SectionTitle>Holding $ANTY comes with perks</SectionTitle>
      <HolderBenefits>
        Basic holders get 10% off. VIPs unlock secret gear. Every purchase funds the movement.
      </HolderBenefits>

      <SectionTitle>ANTY Holder Perks</SectionTitle>
      <HolderTiers>
        <TierCard>
          <TierIcon>$</TierIcon>
          <TierDetails>
            <TierTitle>Basic Holder</TierTitle>
            <TierPrice>$500+ USD worth of $ANTY</TierPrice>
            <TierBenefit>10% discount</TierBenefit>
          </TierDetails>
        </TierCard>

        <TierCard>
          <TierIcon bgColor="#a01010">⚡</TierIcon>
          <TierDetails>
            <TierTitle>VIP Shifty Hunter</TierTitle>
            <TierPrice>$2,500+ USD worth of $ANTY</TierPrice>
            <TierBenefit>20% discumt + exclusive drops</TierBenefit>
          </TierDetails>
        </TierCard>
      </HolderTiers>

      <FilterSection>
        <FilterButton>@CazoPendejoss</FilterButton>
        <FilterButton>@MemeSenseMD</FilterButton>
        <SortSelect>
          <span>Sort By:</span>
          <FilterButton>Drop Date ▾</FilterButton>
        </SortSelect>
      </FilterSection>

      <SectionTitle>Merch for the holder</SectionTitle>
      <MerchGrid>
        <MerchItem>
          <MerchImage>
            <div style={{ width: '60px', height: '60px', backgroundColor: '#666' }}></div>
          </MerchImage>
          <MerchName>Sticker Pack</MerchName>
          <MerchPrice>$5.00</MerchPrice>
          <ViewButton>View</ViewButton>
        </MerchItem>

        <MerchItem>
          <MerchImage>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#666">
              <path d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21" />
            </svg>
          </MerchImage>
          <MerchName>T-Shirt</MerchName>
          <MerchPrice>$20.00</MerchPrice>
          <ViewButton>View</ViewButton>
        </MerchItem>

        <MerchItem>
          <MerchImage>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#666">
              <path d="M12,2A9,9 0 0,0 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14 21,11A9,9 0 0,0 12,2M8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11M16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11M12,14L13.5,17H10.5L12,14Z" />
            </svg>
          </MerchImage>
          <MerchName>Hat</MerchName>
          <MerchPrice>$25.00</MerchPrice>
          <ViewButton>View</ViewButton>
        </MerchItem>

        <MerchItem>
          <MerchImage>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#666">
              <path d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z" />
            </svg>
          </MerchImage>
          <MerchName>Hoodie</MerchName>
          <MerchPrice>$45.00</MerchPrice>
          <ViewButton>View</ViewButton>
        </MerchItem>
      </MerchGrid>
    </Container>
  );
};
