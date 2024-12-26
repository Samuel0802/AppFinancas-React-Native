import React, { createContext, useState } from "react";
import api from "../Services/api";
import { useNavigation } from "@react-navigation/native";

// Criação do contexto
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    // useState dentro do componente funcional
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

const navigation = useNavigation();

//requisição HTTP com API 
//Função para Cadastrar Usuários
async function SignUp(email, password, nome) {

    setLoadingAuth(true); //Se chamou o SignUp - carregar
    try {
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email,
       
      })
      setLoadingAuth(false); //deu tudo certo cancelar o loading

  navigation.goBack(); //Volta para a tela anterior

    }
    
    catch(err){
        console.log("ERRO AO CADATRAR", err);
        setLoadingAuth(false);
    }
}


    return (

        //value={{ user, SignUp }}: qualquer componente consiga acessar essa função
       //Compartilhando Tudo no App
        <AuthContext.Provider value={{ signed: !!user, user, SignUp, loadingAuth }}>
            {/* signed: !!user: converte variavel em boleano - ele verifica automatico se tem ou não um user logado   */}
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
