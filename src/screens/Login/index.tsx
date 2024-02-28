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
import { useNavigation } from "@react-navigation/native";
import { GoogleLogo } from "phosphor-react-native";


export default function Login(){
    const navigation = useNavigation();
    const handleLogin=async()=>{
        navigation.navigate('TabsMain')
    }
    
    return(
        
  <Container >
            <TitleLogin>Login</TitleLogin>
            <FormLogin>
                
                <InputWithIcon 
                    icon="mail"
                    placeholder="Email ou Username"
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
                
                    onPress={handleLogin}
                />
            </FormLogin>
            <AreaLoginSocial>
            <AreaTitle>
            <Line/>
            <TitleLoginSocial>Ou com</TitleLoginSocial>
            <Line/>

            </AreaTitle>
                <GoogleLogo size={32} color="#fff"/>
            </AreaLoginSocial>
            <SignUpArea>
                <TextSignUp>Não tem uma conta? </TextSignUp>
                <TextSignUpBold>Inscrever-se</TextSignUpBold>
            </SignUpArea>
           
        </Container>
      
    );
}