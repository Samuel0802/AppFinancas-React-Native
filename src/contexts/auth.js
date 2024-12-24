import React, { createContext, useState } from "react";
import api from "../Services/api";
import { useNavigation } from "@react-navigation/native";

// Criação do contexto
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    // useState dentro do componente funcional
    const [user, setUser] = useState({
        nome: 'Samuel Souza'
    });

const navigation = useNavigation();

//requisição HTTP com API
async function SignUp(email, senha, nome) {
    
    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: senha,
      })

  navigation.goBack(); //Voltar uma pagina

    }catch(err){
        console.log("ERRO AO CADATRAR", err);
    }
}


    return (

        //value={{ user, SignUp }}: qualquer componente consiga acessar essa função

        <AuthContext.Provider value={{ user, SignUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
