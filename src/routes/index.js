import React from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";


function Routes(){
  const loading = false; //função de carregamento
  const signed = false; //user logado ou ñ

  return(
    // Se tiver logado Vai para View Senão AuthRoutes
     signed ? <View></View>  : <AuthRoutes/>
  );
}

export default Routes;