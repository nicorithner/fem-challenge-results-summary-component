import styled from "styled-components";
import { NEUTRAL, PRIMARY_WITH_OPACITY } from "../../constants";

export const AvrgScoreCardWrapper = styled.div`
  background: linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 512px;
  width: 368px;
  border-radius: 32px;
  text-align: center;
  color: ${NEUTRAL.lightLavender};
  font-weight: 700;
  padding: 20px;
`;

export const AvgScoreCardTitle = styled.h1`
  font-size: ${24 / 16}rem;
`;

export const ScoreCircle = styled.div`
  background: linear-gradient(
    180deg,
    #4d21c9 0%,
    rgba(37, 33, 201, 0) 100%,
    rgba(37, 33, 201, 0) 100%
  );
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Score = styled.h3`
  font-size: ${72 / 16}rem;
  line-height: ${72 / 16}rem;
  color: ${NEUTRAL.white};
`;

export const ScoreSubText = styled.p`
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
  color: ${PRIMARY_WITH_OPACITY.lightLavender};
`;

export const AvgScoreCardAffirmation = styled.h2`
  font-size: ${32 / 16}rem;
  line-height: ${37 / 16}rem;
  color: ${NEUTRAL.white};
`;

export const AvgScoreCardDescription = styled.p`
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
  width: 260px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const DescriptionWrapper = styled.div``;
