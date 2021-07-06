import React, { useState, useEffect } from "react";
import { socket } from "../api/server";
import styled from "styled-components";

const BlocoMensagem = styled.article`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40%;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #ea4646;
`;

const Mensageiro = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;
const Mensagem = styled.p`
  font-size: 20px;
  font-weight: 200;
`;

function QuadroMensagens() {
  const [correio, setCorreio] = useState([]);

  useEffect(() => {
    socket.on("retornaMensagem", (dados) => {
      setCorreio([...correio, dados]);
    });
  });

  return correio.map((dados, index) => {
    return (
      <BlocoMensagem key={index}>
        <Mensageiro>De: {dados.mensagens.remetente}</Mensageiro>
        <Mensageiro>Para: {dados.mensagens.destinatario}</Mensageiro>
        <Mensagem>{dados.mensagens.mensagem}</Mensagem>
      </BlocoMensagem>
    );
  });
}

export default QuadroMensagens;
