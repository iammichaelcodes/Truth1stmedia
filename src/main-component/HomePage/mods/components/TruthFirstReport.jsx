import React from "react";
import styled from "styled-components";

const ReportsWrapper = styled.div`
  padding: 2rem;
  background: #f9f9f9;
`;

const ReportsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const ReportGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ReportCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  background: #fff;
  flex: 1 0 calc(33.333% - 1rem);
  min-width: 200px;
`;

const ReportImage = styled.div`
  background: #ccc;
  height: 120px;
  margin-bottom: 0.5rem;
`;

const ReportTitle = styled.h5`
  font-weight: bold;
  color: black;
`;

const Hashtag = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const SmallCard = styled.div`
  border: 1px solid #ddd;
  background: #fff;
  padding: 1rem;
  margin-top: 2rem;
`;

const VoteCard = styled(SmallCard)`
  text-align: center;
`;

export const TruthFirstReports = () => {
  return (
    <ReportsWrapper>
      <ReportsTitle>
        <span role="img" aria-label="detective">🕵️‍♂️</span> TRUTHFIRST REPORTS
      </ReportsTitle>
      <Subtitle>
        Exclusive investigations. Funded by the people. <br />
        Exposing what the media won't.
      </Subtitle>
      <ReportGrid>
        <ReportCard>
          <ReportImage />
          <ReportTitle>How Pfizer Used NGOs to Launder Narrative Control</ReportTitle>
          <p>Unlock with ATNTY or $7.99</p>
          <Hashtag>#Pharma #Media #WokeCapital</Hashtag>
        </ReportCard>
        <ReportCard>
          <ReportImage />
          <ReportTitle>Report Title</ReportTitle>
          <p>Unlock with ATNTY or $7.99</p>
          <Hashtag>#Pharma #Media #WokeCapital</Hashtag>
        </ReportCard>
        <ReportCard>
          <ReportImage />
          <ReportTitle>Report Title</ReportTitle>
          <p style={{ height: "2rem", background: "#eee", marginBottom: "0.5rem" }}></p>
          <p style={{ height: "2rem", background: "#eee", marginBottom: "0.5rem" }}></p>
          <Hashtag>#Pharma #Media #WokeCapital</Hashtag>
        </ReportCard>
      </ReportGrid>

      <SmallCard>
        <p><strong>Got a lead?</strong> Submit a tip.<br />We protect whistleblowers.</p>
      </SmallCard>

      <VoteCard>
        <p><strong>Help choose the next case.<br />Vote with ANTY</strong></p>
        <button className="btn btn-dark mt-2">Choose Priorities And Vote</button>
      </VoteCard>
    </ReportsWrapper>
  );
};

