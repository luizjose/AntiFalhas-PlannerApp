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
import { View } from "react-native";
export default function SignUp(){
    return(
        <Container >
        <TitleLogin>Sign Up</TitleLogin>
        <FormLogin>
            
            <InputWithIcon 
                icon="mail"
                placeholder="Email"
            />
            <InputWithIcon 
                icon="account-circle"
                placeholder="Username"
            />
            <InputWithIcon 
                icon="lock-outline"
                placeholder="Password"
                password={true}
            />
            <View style={{marginBottom:55}}></View>
            <Button title="Create"/>
        </FormLogin>
        <AreaLoginSocial>
        <AreaTitle>
        <Line/>
        <TitleLoginSocial>Ou com</TitleLoginSocial>
        <Line/>
        </AreaTitle>
            
        </AreaLoginSocial>
        <SignUpArea>
            <TextSignUp>Ja tem uma conta? </TextSignUp>
            <TextSignUpBold>Login</TextSignUpBold>
        </SignUpArea>
       
    </Container>
    );
}