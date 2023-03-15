import {
  ResultsSummaryWrapper,
  TopCard,
  ScoreCircle,
  Score,
  ScoreSubText,
  SummaryCard,
  SkillRow,
  SkillName,
  SkillRowScore,
  SummaryCardButton,
} from "./ResultsSummary.styled.js";

export default function ResultsSummary() {
  return (
    <ResultsSummaryWrapper>
      <TopCard>
        <h1>Your Result</h1>
        <ScoreCircle>
          <Score>76</Score>
          <ScoreSubText>of 100</ScoreSubText>
        </ScoreCircle>

        <h1>Great</h1>

        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </TopCard>

      <SummaryCard>
        <h1>Summary</h1>

        <SkillRow>
          <SkillName>Reaction</SkillName>
          <SkillRowScore>80 / 100</SkillRowScore>
        </SkillRow>

        <SkillRow>
          <SkillName>Memory</SkillName>
          <SkillRowScore>92 / 100</SkillRowScore>
        </SkillRow>

        <SkillRow>
          <SkillName>Verbal</SkillName>
          <SkillRowScore>61 / 100</SkillRowScore>
        </SkillRow>

        <SkillRow>
          <SkillName>Visual</SkillName>
          <SkillRowScore>72 / 100</SkillRowScore>
        </SkillRow>

        <SummaryCardButton>Continue</SummaryCardButton>
      </SummaryCard>
    </ResultsSummaryWrapper>
  );
}
