import styled from "styled-components";
import Colors from '../../Colors';

export const Backgroud = styled.View`
  flex: 1;
  background-color: ${Colors.fundo};
`;


export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 25px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: ${Colors.text};
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 8px;
color: ${Colors.textcard};
margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`

width: 90%;
height: 45px;
border-radius: 8px;
background-color: ${Colors.atual};
margin-top: 10px;
align-items: center;
justify-content: center;

`;

export const SubmitText = styled.Text`

font-size: 20px;
color: ${Colors.text};

`;

export const Link = styled.TouchableOpacity`

margin-top: 10px;
margin-bottom: 10px;

`;

export const LinkText = styled.Text`

color: ${Colors.textcard};

`;

