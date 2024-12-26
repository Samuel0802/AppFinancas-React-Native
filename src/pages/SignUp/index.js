import React , {useContext, useState} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import {
  Backgroud,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,

} from '../Signin/styles';
import { Platform, ActivityIndicator } from "react-native";
import { AuthContext } from "../../contexts/auth";


export default function SignUp() {

  
  const { SignUp, loadingAuth } = useContext(AuthContext); //é um gancho (hook) do React. Ele serve para acessar informações de um contexto.
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  //Pegando as informação digitada pelo user e jogar na contexts/auth.js
  function handleSignUp(){
     //validação de campo
     if(nome === '' || email === '' || password === ''){
      Alert.alert('Preencha todos os campos');
      return;
     }
    //Função para Cadastrar Usuários
    SignUp(email,password,nome);
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
            value={password} 
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} //Esconder a senha
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>

          {
            loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
            ) : 
            (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
      
        </SubmitButton>




      </Container>
    </Backgroud>
  );
}