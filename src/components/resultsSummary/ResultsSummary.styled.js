import styled from "styled-components";
import { NEUTRAL, PRIMARY } from "../../constants";

export const ResultsSummaryWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 736px;
  height: 512px;
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px;

  h1 {
    color: ${PRIMARY.darkNavyBlue};
    font-style: normal;
    font-weight: 700;
    font-size: ${24 / 16}rem;
    line-height: ${28 / 16}rem;
  }
`;

export const ScoreBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 272px;
  widht: 288px;
`;

export const SummaryCardButton = styled.button`
  background-color: ${PRIMARY.darkNavyBlue};
  color: ${NEUTRAL.white};
  width: 288px;
  height: 56px;
  border-radius: 128px;
  font-weight: 700;
  font-size: ${18 / 16}rem;
  line-height: ${21 / 16}rem;
`;
