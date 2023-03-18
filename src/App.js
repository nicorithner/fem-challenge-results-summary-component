import GlobalStyles from "./GlobalStyles";
import ResultsSummary from "./components/resultsSummary/ResultsSummary";
import styled from "styled-components";
import { NEUTRAL } from "./constants";

function App() {
  return (
    <Wrapper>
      <ResultsSummary />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${NEUTRAL.paleBlue};

  @media (min-width: 400px) {
    // height: 100%;
  }
`;

export default App;
