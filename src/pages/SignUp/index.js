import React , {useContext, useState} from "react";
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
import { AuthContext } from "../../contexts/auth";


export default function SignUp() {

  //SignUp: nome da função do meu context
  const { SignUp } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 
  //Pegando as informação digitada pelo user e jogar na contexts/auth.js
  function handleSignUp(){
    SignUp(nome,email,senha);
  }

  return (
    <Backgroud>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled>

        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

        </AreaInput>


        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

        </AreaInput>


        <AreaInput>
          <Input
            placeholder="Sua Senha"
            value={senha} 
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true} //Esconder a senha
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>




      </Container>
    </Backgroud>
  );
}