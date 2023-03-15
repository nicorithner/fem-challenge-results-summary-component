import {
  SkillName,
  SkillBar,
  SkillScore,
  SkillIcon,
} from "./SkillScoreBar.styled.js";

export default function SkillScoreBar({
  color,
  backgroundColor,
  icon,
  name,
  score,
}) {
  return (
    <SkillBar backgroundColor={backgroundColor}>
      <SkillName color={color}>
        <SkillIcon alt={`${name} skill icon`} src={icon} />
        {name}
      </SkillName>
      <SkillScore>
        {score} <span>/</span> <span>100</span>
      </SkillScore>
    </SkillBar>
  );
}
