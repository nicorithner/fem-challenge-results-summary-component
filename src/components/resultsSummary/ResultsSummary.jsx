import SkillScoreBar from "../skillScoreBar/SkillScoreBar.jsx";
import AvrgScoreCard from "../avrgScoreCard/AvrgScoreCard.jsx";
import data from "../../data.json";

import { PRIMARY, PRIMARY_WITH_OPACITY } from "../../constants.js";
import {
  ResultsSummaryWrapper,
  SummaryCard,
  ScoreBarWrapper,
  SummaryCardButton,
} from "./ResultsSummary.styled.js";

import iconMemory from "../../assets/images/icon-memory.svg";
import iconReaction from "../../assets/images/icon-reaction.svg";
import iconVerbal from "../../assets/images/icon-verbal.svg";
import iconVisual from "../../assets/images/icon-visual.svg";

const barColors = {
  Reaction: {
    backgroundColor: `${PRIMARY_WITH_OPACITY.lightRed}`,
    color: `${PRIMARY.lightRed}`,
    icon: `${iconReaction}`,
  },
  Memory: {
    backgroundColor: `${PRIMARY_WITH_OPACITY.orangeyYellow}`,
    color: `${PRIMARY.orangeyYellow}`,
    icon: `${iconMemory}`,
  },
  Verbal: {
    backgroundColor: `${PRIMARY_WITH_OPACITY.greenTeal}`,
    color: `${PRIMARY.greenTeal}`,
    icon: `${iconVerbal}`,
  },
  Visual: {
    backgroundColor: `${PRIMARY_WITH_OPACITY.cobaltBlue}`,
    color: `${PRIMARY.cobaltBlue}`,
    icon: `${iconVisual}`,
  },
};
const getSkillScoreBars = (bars) => {
  const barsArr = [];
  for (let i = 0; i < bars.length; i++) {
    barsArr.push(
      <SkillScoreBar
        name={bars[i].category}
        score={bars[i].score}
        backgroundColor={barColors[bars[i].category].backgroundColor}
        color={barColors[bars[i].category].color}
        icon={barColors[bars[i].category].icon}
      />
    );
  }
  return barsArr;
};

export default function ResultsSummary() {
  return (
    <ResultsSummaryWrapper>
      <AvrgScoreCard average={76} />
      <SummaryCard>
        <h1>Summary</h1>
        <ScoreBarWrapper>{getSkillScoreBars(data)}</ScoreBarWrapper>
        <SummaryCardButton>Continue</SummaryCardButton>
      </SummaryCard>
    </ResultsSummaryWrapper>
  );
}
