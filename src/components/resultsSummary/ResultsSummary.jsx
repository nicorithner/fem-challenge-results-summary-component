import SkillScoreBar from "../skillBarScore/SkillScoreBar.jsx";
import { PRIMARY, PRIMARY_WITH_OPACITY } from "../../constants.js";
import {
  ResultsSummaryWrapper,
  AvrgScoreCard,
  ScoreCircle,
  Score,
  ScoreSubText,
  SummaryCard,
  ScoreBarWrapper,
  SummaryCardButton,
} from "./ResultsSummary.styled.js";

import iconMemory from "../../assets/images/icon-memory.svg";
import iconReaction from "../../assets/images/icon-reaction.svg";
import iconVerbal from "../../assets/images/icon-verbal.svg";
import iconVisual from "../../assets/images/icon-visual.svg";

export default function ResultsSummary() {
  return (
    <ResultsSummaryWrapper>
      <SummaryCard>
        <AvrgScoreCard>
          <h1>Your Result</h1>
          <ScoreCircle>
            <Score>76</Score>
            <ScoreSubText>of 100</ScoreSubText>
          </ScoreCircle>

          <h1>Great</h1>

          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </AvrgScoreCard>

        <h1>Summary</h1>

        <ScoreBarWrapper>
          <SkillScoreBar
            name="Reaction"
            score={80}
            backgroundColor={PRIMARY_WITH_OPACITY.lightRed}
            color={PRIMARY.lightRed}
            icon={iconReaction}
          />
          <SkillScoreBar
            name="Memory"
            score={92}
            backgroundColor={PRIMARY_WITH_OPACITY.orangeyYellow}
            color={PRIMARY.orangeyYellow}
            icon={iconMemory}
          />
          <SkillScoreBar
            name="Verbal"
            score={61}
            backgroundColor={PRIMARY_WITH_OPACITY.greenTeal}
            color={PRIMARY.greenTeal}
            icon={iconVerbal}
          />
          <SkillScoreBar
            name="Visual"
            score={72}
            backgroundColor={PRIMARY_WITH_OPACITY.cobaltBlue}
            color={PRIMARY.cobaltBlue}
            icon={iconVisual}
          />
        </ScoreBarWrapper>

        <SummaryCardButton>Continue</SummaryCardButton>
      </SummaryCard>
    </ResultsSummaryWrapper>
  );
}
