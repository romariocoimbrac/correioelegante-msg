import React from "react";
import EnviaMensagem from "./Components/EnviaMensagem";
import QuadroMensagens from "./Components/QuadroMensagens";

import styled from "styled-components";
import { GlobalStyle } from "./Components/UI/GlobalStyle";

const Container = styled.section`
  max-width: 720px;
  text-align: center;
  margin: 0 auto;
`;

const Quadro = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Titulo = styled.h1`
  font-size: 40px;
  font-weight: 800;
  margin: 20px 0;

  ::after {
    content: "";
    display: block;
    width: 60%;
    height: 1px;
    background: #ea4646;
    margin: 5px auto;
  }
`;

function App() {
  return (
    <Container className="App">
      <GlobalStyle />
      <Titulo>Correio Elegante</Titulo>
      <EnviaMensagem />
      <Quadro>
        <QuadroMensagens />
      </Quadro>
    </Container>
  );
}

export default App;
