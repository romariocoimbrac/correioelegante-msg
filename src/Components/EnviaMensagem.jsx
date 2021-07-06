import React, { useState } from "react";
import { socket } from "../api/server";

import styled from "styled-components";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

const CamposTexto = styled.input`
  background: transparent;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 80%;
  border: none;
  border-bottom: 1px solid #ea4646;
  color: white;
  outline: none;
  margin: 0 auto;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: "color 9999s ease-out, background-color 9999s ease-out";
    transition-delay: 9999s;
  }
`;

const BotaoEnviar = styled.button`
  width: 30%;
  background: transparent;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #ea4646;
  margin: 10px auto;
  padding: 5px 0;
  cursor: pointer;
`;

function EnviaMensagem() {
  const [remetente, setRemetente] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [mensagem, setMensagem] = useState("");
  let mensagens = { remetente, destinatario, mensagem };

  const enviaMensagem = (e) => {
    e.preventDefault();
    console.log(mensagens);
    socket.emit("enviaMensagem", { mensagens });
    setRemetente("");
    setDestinatario("");
    setMensagem("");
  };

  return (
    <Formulario onSubmit={enviaMensagem}>
      <CamposTexto
        type="text"
        name="remetente"
        placeholder="De:"
        value={remetente}
        onChange={(e) => {
          setRemetente(e.target.value);
        }}
      ></CamposTexto>
      <CamposTexto
        type="text"
        name="destinatario"
        placeholder="Para:"
        value={destinatario}
        onChange={(e) => {
          setDestinatario(e.target.value);
        }}
      ></CamposTexto>
      <CamposTexto
        type="text"
        name="message"
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => {
          setMensagem(e.target.value);
        }}
        required
      ></CamposTexto>
      <BotaoEnviar type="submit">Enviar</BotaoEnviar>
    </Formulario>
  );
}

export default EnviaMensagem;
