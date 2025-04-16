import React from 'react';
import styled from 'styled-components';

// Main container with proper border and padding
const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border: 3px solid #000;
  border-radius: 0;
  background-color: white;
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #000;
  background-color: white;
`;

const Logo = styled.div`
  margin-right: 20px;
`;

// Shield SVG Icon with black border and light fill
const ShieldIcon = () => (
  <svg width="60" height="70" viewBox="0 0 60 70" fill="none" stroke="black" strokeWidth="2">
    <path d="M5 10 L30 3 L55 10 L55 35 C55 50 30 65 30 65 C30 65 5 50 5 35 Z" fill="#f0f0f0"/>
  </svg>
);

// Improved Check Icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" stroke="black" fill="none"/>
    <polyline points="8 12 11 15 16 9" stroke="black"/>
  </svg>
);

const HeaderText = styled.div`
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
  }
  
  p {
    margin: 5px 0 0;
    font-size: 16px;
    color: #000;
  }
`;

// Parent grid with gutter/padding
const GridContainer = styled.div`
  padding: 20px;
  background-color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px; // This creates the gutter between panels
  background-color: white;
`;

const Panel = styled.div`
  background-color: white;
  padding: 0;
  border: 1px solid #000;
`;

const PanelTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  padding: 10px 15px;
  border-bottom: 1px solid #000;
  background-color: white;
  color: #000;
`;

const PanelContent = styled.div`
  padding: 15px;
  color: #000;
`;

const Progress = styled.div`
  height: 20px;
  width: 200px;
  background-color: #ddd;
  position: relative;
  margin: 10px 0;
  border: 1px solid #aaa;
  
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

const Score = styled.div`
  font-size: 80px;
  font-weight: bold;
  margin: 5px 0 15px;
  line-height: 1;
  color: #000;
`;

const ListItem = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: #000;
`;

const ViewAll = styled.div`
  text-align: right;
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
  color: #000;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: ${props => props.noPadding ? '0' : '3px 0'};
  border-bottom: ${props => props.bordered ? '1px solid #eee' : 'none'};
  color: #000;
`;

const ChartContainer = styled.div`
  margin: 10px 0;
  font-size: 14px;
`;

const SimpleChart = styled.div`
  display: flex;
  align-items: flex-end;
  height: 30px;

  .line {
    width: 2px;
    background-color: #000;
    margin-right: 2px;
    height: ${props => props.height || '10px'};
  }
`;

const StatusBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #000;
  margin-top: 15px;
`;

const StatusCell = styled.div`
  padding: 15px;
  display: flex;
  color: #000;
  ${props => props.right && `
    border-left: 1px solid #000;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  `}
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
  color: #000;

  input {
    margin-right: 8px;
  }
`;

const WalletAddress = styled.div`
  font-family: monospace;
  color: #333;
`;

const WalletSection = styled.div`
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;

const SectionTitle = styled.div`
  margin-bottom: 5px;
  font-weight: normal;
  color: #000;
`;

export const EnergyLaunchShield = () => {
  // Sample chart data for visualization
  const chartPoints = [10, 12, 8, 15, 12, 20, 18, 25];
  
  return (
    <Container>
      <Header>
        <Logo>
          <ShieldIcon />
        </Logo>
        <HeaderText>
          <h1>Energy Launcshield</h1>
          <p>Protecting the mission. Guarding the truth.</p>
        </HeaderText>
      </Header>
      
      <GridContainer>
        <Grid>
          {/* Governance Shield Panel */}
          <Panel>
            <PanelTitle>Governance Shield</PanelTitle>
            <PanelContent>
              <div>
                <SectionTitle>Launchshield Score</SectionTitle>
                <Progress value={96} />
                <Score>96</Score>
              </div>
              
              <div>
                <SectionTitle>Recent Governance Votes</SectionTitle>
                <ListItem><em>Shifty of the Week</em></ListItem>
                <ListItem>Investigate SMRC</ListItem>
                <ListItem>Release ESG Report</ListItem>
              </div>
              
              <ViewAll>View All</ViewAll>
            </PanelContent>
          </Panel>
          
          {/* Submission Firewall Panel */}
          <Panel>
            <PanelTitle>Submission Firewall</PanelTitle>
            <PanelContent>
              <DataRow bordered>
                <div>Total Submissions</div>
                <div>3,504</div>
              </DataRow>
              
              <DataRow bordered>
                <div>Marked as Spam</div>
                <div>120</div>
              </DataRow>
              
              <DataRow bordered>
                <div>Blocked</div>
                <div>39</div>
              </DataRow>
              
              <WalletSection>
                <DataRow noPadding>
                  <div>Wallet:</div>
                  <WalletAddress>M1/XL...JNp0</WalletAddress>
                </DataRow>
                
                <div style={{ marginTop: '10px' }}>
                  <SectionTitle>Actions</SectionTitle>
                  <CheckboxItem>
                    <input type="checkbox" id="mark-spam" />
                    <label htmlFor="mark-spam">Mark Spam</label>
                  </CheckboxItem>
                  <CheckboxItem>
                    <input type="checkbox" id="ban-wallet" />
                    <label htmlFor="ban-wallet">Ban Wallet</label>
                  </CheckboxItem>
                  <CheckboxItem>
                    <input type="checkbox" id="view-submissions" />
                    <label htmlFor="view-submissions">View Submissions</label>
                  </CheckboxItem>
                </div>
              </WalletSection>
            </PanelContent>
          </Panel>
          
          {/* Listing Guard Panel */}
          <Panel>
            <PanelTitle>Listing Guard</PanelTitle>
            <PanelContent>
              <div>
                <SectionTitle>Circulating Supply</SectionTitle>
                <Score style={{ fontSize: '36px' }}>101.5M ANTY</Score>
                
                <ChartContainer>
                  <SimpleChart>
                    {chartPoints.map((point, index) => (
                      <div 
                        key={index} 
                        className="line" 
                        style={{ height: `${point}px` }} 
                      />
                    ))}
                  </SimpleChart>
                </ChartContainer>
              </div>
              
              <StatusBox>
                <StatusCell>Anti-Bot Status</StatusCell>
                <StatusCell right>
                  <CheckIcon />
                  <span style={{ marginLeft: '5px' }}>ACTIVE</span>
                </StatusCell>
              </StatusBox>
            </PanelContent>
          </Panel>
          
          {/* Community Trust Panel */}
          <Panel>
            <PanelTitle>Community Trust</PanelTitle>
            <PanelContent>
              <DataRow bordered>
                <div>Wallet</div>
                <div>Score</div>
              </DataRow>
              
              <DataRow bordered>
                <WalletAddress>F1/K ....xA34</WalletAddress>
                <div>90</div>
              </DataRow>
              
              <DataRow bordered>
                <WalletAddress>T4yP ....hE57</WalletAddress>
                <div>84</div>
              </DataRow>
              
              <DataRow bordered>
                <WalletAddress>Q6oV ....mLu9</WalletAddress>
                <div>82</div>
              </DataRow>
              
              <DataRow>
                <WalletAddress>C2jN ....nW84</WalletAddress>
                <div>80</div>
              </DataRow>
            </PanelContent>
          </Panel>
        </Grid>
      </GridContainer>
    </Container>
  );
};

// export default EnergyLauncshield;