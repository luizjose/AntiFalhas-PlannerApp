import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { CardContainer, ExpandButton, LeftBar, StatusText, TimeText, Title } from "./style";

export function TaskToday({ title,  startTime, endTime, details, status }){
    const getStatusColor = (status) => {
        if (status === 1) {
            return 'rgba(143, 153, 235, 0.2)'; // Cor para o status 1
        } else if (status === 2) {
            return 'rgba(120, 241, 154, 0.20)'; // Cor para o status 2
        } else if (status === 3) {
            return '#FFE9ED'; // Cor para o status 3
        } else {
            return '#fff'; // Cor padrão ou alternativa
        }
    };
    const getStatusColorText = (status) => {
        if (status === 1) {
            return '#454b76'; // Cor para o status 1
        } else if (status === 2) {
            return '#61DA83'; // Cor para o status 2
        } else if (status === 3) {
            return '#F57C96'; // Cor para o status 3
        } else {
            return '#fff'; // Cor padrão ou alternativa
        }
    };
    return(
        <CardContainer>
            <LeftBar/>
            <View style={{
                marginTop: 10
            }}>

          
      <Title>{title}</Title>
      <TimeText>{`${startTime} - ${endTime}`}</TimeText>
      
      <StatusText style={{
        backgroundColor:  getStatusColor(status), 
        color:getStatusColorText(status),
        padding: 2,
        width: 60,
        height: 20,
        textAlign: "center",
        borderRadius: 5

      }}>{details}</StatusText>
      
      </View>
      <ExpandButton>
       <MaterialIcons
       name="more-vert"
       color="#000"
       size={25}
       />
        
      </ExpandButton>
    </CardContainer>
    )
}