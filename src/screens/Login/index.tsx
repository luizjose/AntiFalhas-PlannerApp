import { ScrollView } from "react-native";
import { 
    Container, 
    TitleLogin,
    FormLogin,
    ButtonForgot,
    TextForgot,
    SignUpArea,
    TextSignUp,
    TextSignUpBold,
    AreaLoginSocial,
    AreaTitle,
    TitleLoginSocial,
    Line
 } from "./styles";
import {InputWithIcon} from "../../components/Input";
import { Button } from "../../components/Buttons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { GoogleLogo } from "phosphor-react-native";


export default function Login(){
    const navigation = useNavigation();


    const handleLogin = () => {
        navigation.dispatch(
            CommonActions.navigate('TabsMain')
        ) // Removed 'await'
    };
    
    return(
        
  <Container >
            <TitleLogin>Login</TitleLogin>
            <FormLogin>
                
                <InputWithIcon 
                    icon="mail"
                    placeholder="Email ou Username"
                    password={false}
                />
                <InputWithIcon 
                    icon="lock-outline"
                    placeholder="Password"
                    password={true}
                />
                <ButtonForgot>
                    <TextForgot>Esqueceu sua senha?</TextForgot>
                </ButtonForgot>
                <Button 
                    title="Login"
                    
                    onPress={()=> handleLogin()}
                />
            </FormLogin>
            <AreaLoginSocial>
            <AreaTitle>
            <Line/>
            <TitleLoginSocial>Ou com</TitleLoginSocial>
            <Line/>

            </AreaTitle>
           
            </AreaLoginSocial>
            <SignUpArea>
                <TextSignUp>Não tem uma conta? </TextSignUp>
                <TextSignUpBold>Inscrever-se</TextSignUpBold>
            </SignUpArea>
           
        </Container>
      
    );
}