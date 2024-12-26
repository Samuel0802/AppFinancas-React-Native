import React, {useContext, useState} from "react";
import {
   Backgroud ,
    Container,
     Logo,
      AreaInput,
       Input,
        SubmitButton,
         SubmitText,
          Link,
           LinkText,
        } from "./styles";
  import { Platform, ActivityIndicator } from "react-native";     
  import { useNavigation } from "@react-navigation/native";
  import { AuthContext } from "../../contexts/auth";
 
export default function SignIn(){

  const navigation = useNavigation();
  const {SignIn, loadingAuth} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  function handleLogin(){
  SignIn(email,password);
  }

  return(
    <Backgroud>
       <Container
       behavior={Platform.OS === 'ios' ? 'padding' : ''}//função para quando abrir teclado subir os itens
       enabled
       >
            
            <Logo
            source={require('../../assets/Logo.png')}
            />

            <AreaInput>
            <Input
            placeholder="Digite seu Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
            </AreaInput>


            <AreaInput>
            <Input
            placeholder="Digite sua Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            </AreaInput>

            <SubmitButton octiveOpacity={0.8}  onPress={handleLogin}>

             {
              loadingAuth ? (

                <ActivityIndicator size={20} color="#FFF"/>
              ) : (
                <SubmitText>Acessar</SubmitText>
              )
             }

            </SubmitButton>

            <Link onPress={ () => navigation.navigate('SignUp')}>
              <LinkText>Criar uma conta</LinkText>
            </Link>

      </Container>
    </Backgroud>
  );
}