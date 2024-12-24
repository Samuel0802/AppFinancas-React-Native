import React from "react";
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
  import { Platform } from "react-native";  //Pra saber qual plataforma    
  import { useNavigation } from "@react-navigation/native";
 
export default function SignIn(){


  const navigation = useNavigation();

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
            />
            </AreaInput>


            <AreaInput>
            <Input
            placeholder="Digite sua Senha"
            />
            </AreaInput>

            <SubmitButton octiveOpacity={0.8}>
              <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link onPress={ () => navigation.navigate('SignUp')}>
              <LinkText>Criar uma conta</LinkText>
            </Link>

      </Container>
    </Backgroud>
  );
}