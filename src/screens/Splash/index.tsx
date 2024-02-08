import { Container, LogoImg, DescriptionArea, LogoText, DescriptionText, ButtonsArea, ButtonSemFundo, ButtonText  } from "./styles";
import LogoSplash from '../../assets/init.png';
import { Button } from "../../components/Buttons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Splash(){
    const navigation = useNavigation();
    const handleLogin = async ()=>{
        navigation.navigate('Login')
    }
    const handleSignUp = async ()=> {
        navigation.navigate('SignUp')
    }
    return(
        <Container>
            <LogoImg source={LogoSplash} />
            <DescriptionArea>
                <LogoText>ANTI-FALHAS</LogoText>
                <DescriptionText>Planeje o que você fará para ser mais organizado hoje, amanhã e depois de amanhã</DescriptionText>
                <ButtonsArea>
                <Button onPress={handleLogin} title='Login' />

                <ButtonSemFundo onPress={handleSignUp}>
                    <ButtonText>Sign Up</ButtonText>
                    </ButtonSemFundo>
            </ButtonsArea>
            </DescriptionArea>
            
        </Container>
    );
}