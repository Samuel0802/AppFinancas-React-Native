import React, {useContext} from "react";
import { AuthContext } from "../contexts/auth";
import { View } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes  from "./app.routes";


function Routes(){
  const  {signed} = useContext(AuthContext); //Se tem user logado e jogar para <AppRoutes/>
  const loading = false; //função de carregamento

  return(
    // Se tiver logado Vai para View Senão AuthRoutes
    //Validação se user tiver logado ou não logado
     signed ? <AppRoutes/>  : <AuthRoutes/>

     //AuthRoutes: São as navegação do app
  );
}

export default Routes;