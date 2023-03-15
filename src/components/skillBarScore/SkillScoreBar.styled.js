import styled from "styled-components";
import { GRADIANTS, NEUTRAL, PRIMARY } from "../../constants";

export const SkillBar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  width: 288px;
  height: 56px;
  border-radius: 12px;
  padding: 1rem;
`;

export const SkillIcon = styled.img`
  justify-content: flex-start;
  height: 20px;
  width: 20px;
`;
export const SkillName = styled.p`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: ${18 / 16}rem;
  line-height: 21px;
`;
export const SkillScore = styled.p`
  display: flex;
  justify-content: flex-end;
  gap: ${10 / 16}rem;
  color: ${PRIMARY.darkNavyBlue};
  font-weight: 700;
  font-size: ${18 / 16}rem;
  line-height: 21px;

  span {
    color: ${GRADIANTS.darkNavyBlue};
  }
`;
