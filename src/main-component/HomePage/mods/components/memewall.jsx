import React from "react";
import styled from "styled-components";

const MemeWallWrapper = styled.div`
  padding: 2rem;
  background: #f9f9f9;
`;

const MemeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const MemeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MemeCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  background: #fff;
  text-align: center;
  flex: 1 0 calc(33.333% - 1rem);
  min-width: 150px;

  @media (max-width: 992px) {
    flex: 1 0 calc(50% - 1rem);
  }

  @media (max-width: 576px) {
    flex: 1 0 100%;
  }
`;

const MemeImage = styled.div`
  background: #ccc;
  height: 100px;
  margin-bottom: 0.5rem;
`;

const Username = styled.div`
  font-weight: bold;
`;

const Sidebar = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  background: #fff;
  margin-top: 1rem;
`;

const LargeMeme = styled(Sidebar)`
  /* Custom styles if needed */
`;

const MemeWallLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const RightColumn = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const MemeWall = () => {
  return (
    <MemeWallWrapper>
      <MemeTitle>THE MEME WALL</MemeTitle>
      <Subtitle>
        Where the people post. The people vote. The shifty get huted.
      </Subtitle>
      <MemeWallLayout>
        <LeftColumn>
          <button className="mb-4 btn btn-dark">Submit Your Meme</button>
          <MemeGrid>
            {[...Array(15)].map((_, i) => (
              <MemeCard key={i}>
                <MemeImage />
                <Username>Username</Username>
              </MemeCard>
            ))}
          </MemeGrid>
        </LeftColumn>
        <RightColumn>
          <Sidebar>
            <h5>SHIFTY OF THE WEEK</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vote" id="candidateA" />
              <label className="form-check-label" htmlFor="candidateA">Candidate A</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vote" id="candidateB" />
              <label className="form-check-label" htmlFor="candidateB">Candidate B</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vote" id="candidateC" />
              <label className="form-check-label" htmlFor="candidateC">Candidate C</label>
            </div>
            <button className="mt-2 btn btn-dark">Vote Now</button>
          </Sidebar>

          <Sidebar>
            <h5>LEADERBOARD</h5>
            <p>Top Memes This Week</p>
            <p>Top Contributors</p>
            <p>Last Week’s Winner</p>
          </Sidebar>

          <LargeMeme>
            <MemeImage style={{ height: "100px" }} />
            <p>
              Think you’ve got a meme worthy of Cazado status? Upload it, tag it,
              and let the community decide.
            </p>
          </LargeMeme>
        </RightColumn>
      </MemeWallLayout>
    </MemeWallWrapper>
  );
};
