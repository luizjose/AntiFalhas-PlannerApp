import { TouchableOpacityProps } from "react-native";
import { Container, Title,  } from "./styles";
interface Props {
    title: string;
}
export function Button({title}:Props){
    return(  
        <Container
        >
           <Title>{title}</Title>
      
        </Container>
    )
}