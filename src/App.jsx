import Footer from "components/footer/footer";
import Header from "components/header/header";
import Main from "components/routes/routes";

import "./App.css";
import styled from "styled-components";

const SApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #000b4e, #6c0000, #000c2e);
`;

function App() {
  return (
    <SApp>
      <Header />
      <Main />
      <Footer />
    </SApp>
  );
}

export default App;
