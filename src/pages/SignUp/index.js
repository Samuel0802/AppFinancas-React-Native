import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Backgroud,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,

} from '../Signin/styles';
import { Platform } from "react-native";


export default function SignUp() {
  return (
    <Backgroud>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled>

        <AreaInput>
          <Input
            placeholder="Nome"
          />

        </AreaInput>


        <AreaInput>
          <Input
            placeholder="Email"
          />

        </AreaInput>


        <AreaInput>
          <Input
            placeholder="Sua Senha"
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>




      </Container>
    </Backgroud>
  );
}