
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    flex: 1;
    min-width: 150px;
    max-width: 150px;
   margin:15px;
   
    padding:15px 5px 15px 10px;
    border-radius: 10px;
   
    
`;
export const AreaIcons = styled.View`
flex-direction: row;
justify-content: space-around;
margin-bottom: 10px;

`;
export const MainIcon =styled(MaterialIcons)`

`;
export const BackIcon = styled(MaterialIcons).attrs({
   
})`
right: 0;
color: ${({theme})=> theme.COLORS.WHITE};
`;
export const StatusTask = styled.Text`
color: ${({theme})=> theme.COLORS.WHITE};
`;
export const TotalTask = styled.Text`
font-size: 20px;
color: ${({theme})=> theme.COLORS.WHITE};
`;