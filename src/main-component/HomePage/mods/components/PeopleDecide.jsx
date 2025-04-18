import React from 'react';
import styled from 'styled-components';

// Main container with light gray background
const Container = styled.div`
  max-width: 800px;
  margin:  auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 40px;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const ConnectWalletContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

const ConnectButton = styled.button`
  padding: 15px 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  min-width: 200px;
`;

const ProposalCard = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  display: flex;
`;

const IconContainer = styled.div`
  width: 80px;
  margin-right: 20px;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProposalContent = styled.div`
  flex: 1;
`;

const ProposalTitle = styled.h2`
  font-size: 22px;
  margin: 0 0 10px;
  font-weight: bold;
  color:black;
`;

const ProposalDescription = styled.p`
  font-size: 18px;
  margin: 0 0 15px;
`;

const VotingEnds = styled.p`
  font-size: 16px;
  margin: 0 0 15px;
`;

const ResultsContainer = styled.div`
  margin-bottom: 10px;
`;

const ResultsLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  height: 20px;
  background-color: #fff;
  border: 1px solid #aaa;
  position: relative;
  width: ${props => props.width || '100%'};
  margin-bottom: 5px;
  
  &:before {
    content: '';
    position: absolute;
    background-color: #aaa;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.value}%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items:flex-end;
  padding-left: 10px;

  justify-content: flex-end;
`;

const ViewVoteButton = styled.button`
  padding: 15px 20px;
  border: 2px solid #000;
  height: 45px;
  
  display:flex;
  justify-content:center;
  align-items:center;
  color: white;
  border-radius: 5px;
  background-color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const FooterCard = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 18px;
  margin: 0;
  max-width: 60%;
`;

const SubmitButton = styled.button`
  padding: 15px 20px;
  border: 2px solid #000;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

// SVG Icons
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TshirtIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 8l-3-4H7L4 8l2 1v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9l2-1z" />
    <path d="M12 4v7" />
  </svg>
);

export const PeopleDecide = () => {
  return (
    <Container>
      <Header>
        <Title>The People Decide</Title>
        <Subtitle>Real power. Real accountability. Vote with $ANTY and shape the movement.</Subtitle>
      </Header>

      <ConnectWalletContainer>
        {/* <ConnectButton>Connect Wallet</ConnectButton> */}
        <button className="mb-2 btn btn-dark">Connect Wallet</button>
      </ConnectWalletContainer>

      {/* Proposal 1 */}
      <ProposalCard>
        <IconContainer>
          <Icon>
            <CheckIcon />
          </Icon>
        </IconContainer>

        <ProposalContent>
          <ProposalTitle> <h2 style={{color: 'black'}}>Proposal: Shifty of the Week </h2></ProposalTitle>
          <ProposalDescription>Who should be Shifty of the Week?</ProposalDescription>
          <VotingEnds>Voting Ends: Friday 9PM EST</VotingEnds>

          <ResultsContainer> 
            <ResultsLabel>
              <span>Current Results:</span>
              <span>31%</span>
            </ResultsLabel>
            <ProgressBar value={31} />
          </ResultsContainer>
        </ProposalContent>

        <ButtonContainer>
          <ViewVoteButton>View & Vote</ViewVoteButton>
        </ButtonContainer>
      </ProposalCard>

      {/* Proposal 2 */}
      <ProposalCard>
        <IconContainer>
          <Icon>
            <SearchIcon />
          </Icon>
        </IconContainer>

        <ProposalContent>
          <ProposalTitle><h2 style={{color: 'black'}}>Proposal: Should we investigate [issue]?</h2></ProposalTitle>
          <VotingEnds>Voting Ends: Friday 9PM EST</VotingEnds>

          <ResultsContainer>
            <ResultsLabel>
              <span>Current Results:</span>
              <span>60%</span>
            </ResultsLabel>
            <ProgressBar value={60} />
          </ResultsContainer>

          <ResultsContainer>
            <ResultsLabel>
              <span>No</span>
              <span>40%</span>
            </ResultsLabel>
            <ProgressBar value={40} />
          </ResultsContainer>
        </ProposalContent>

        <ButtonContainer>
          <ViewVoteButton>View & Vote</ViewVoteButton>
        </ButtonContainer>
      </ProposalCard>

      {/* Proposal 3 */}
      <ProposalCard>
        <IconContainer>
          <Icon>
            <TshirtIcon />
          </Icon>
        </IconContainer>

        <ProposalContent>
          <ProposalTitle>Proposal: Which merch design should we drop?</ProposalTitle>
          <VotingEnds>Voting Ends: Friday 9PM EST</VotingEnds>

          <ResultsContainer>
            <ResultsLabel>
              <span>Option A</span>
              <span>15%</span>
            </ResultsLabel>
            <ProgressBar value={15} />
          </ResultsContainer>

          <ResultsContainer>
            <ResultsLabel>
              <span>Option B</span>
              <span>13%</span>
            </ResultsLabel>
            <ProgressBar value={13} />
          </ResultsContainer>
        </ProposalContent>

        <ButtonContainer>
          <ViewVoteButton>View & Vote</ViewVoteButton>
        </ButtonContainer>
      </ProposalCard>

      {/* Footer Card */}
      <FooterCard>
        <FooterText>Want to propose a Shifty target or investigation?</FooterText>
        <SubmitButton>Submit Proposal</SubmitButton>
      </FooterCard>
    </Container>
  );
};

