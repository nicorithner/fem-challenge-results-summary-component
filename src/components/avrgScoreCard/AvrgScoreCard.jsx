import {
  AvrgScoreCardWrapper,
  ScoreCircle,
  Score,
  ScoreSubText,
  AvgScoreCardTitle,
  AvgScoreCardAffirmation,
  AvgScoreCardDescription,
  DescriptionWrapper,
} from "./AvrgScoreCard.styled.js";

export default function AvrgScoreCard({ average }) {
  return (
    <AvrgScoreCardWrapper>
      <AvgScoreCardTitle>Your Result</AvgScoreCardTitle>
      <ScoreCircle>
        <Score>{average}</Score>
        <ScoreSubText>of 100</ScoreSubText>
      </ScoreCircle>
      <DescriptionWrapper>
        <AvgScoreCardAffirmation>Great</AvgScoreCardAffirmation>
        <AvgScoreCardDescription>
          You scored higher than 65% of the people who have taken these tests.
        </AvgScoreCardDescription>
      </DescriptionWrapper>
    </AvrgScoreCardWrapper>
  );
}
