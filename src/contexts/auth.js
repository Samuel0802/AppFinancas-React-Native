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

//função de login
async function SignIn(email, password) {
   
    setLoadingAuth(true);
    try{
        const response = await api.post('/login', {
            //manda para banco: email e senha
            email: email,
            password: password
        })

        const {id, name, token} = response.data; //desconstruir objeto 

        const data = {
            id,
            name,
            token,
            email,
        };

        api.defaults.headers.Authorization = `Bearer ${token}`;//na proxima requisição enviar Bearer ${token} - enviar o Token junto

        setUser({
            id,
            name,
            email,
        });
        
        setLoadingAuth(false);



    }catch(err){

        console.log("ERRO AO LOGAR", err);
        setLoadingAuth(false);
    }

}


    return (

        //value={{ user, SignUp }}: qualquer componente consiga acessar essa função
       //Compartilhando Tudo no App
        <AuthContext.Provider value={{ signed: !!user, user, SignUp, SignIn, loadingAuth }}>
            {/* signed: !!user: converte variavel em boleano - ele verifica automatico se tem ou não um user logado   */}
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
