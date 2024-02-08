import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
export const Container =  styled.View`

background-color: ${({theme})=> theme.COLORS.GRAY_600};
`;
export const TabArea = styled.View`
  
  height: 75px;
  background-color: ${({theme})=> theme.COLORS.GRAY_400};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.GREEN_700};
  border-radius: 30px;
 
  
`;
export const Icon = styled(MaterialIcons).attrs({
    size: 28,
    color:'#C4C4CC',

   
  })`
 
 
  `;
  export const IconCenter = styled(Entypo).attrs({
    size: 34,
    color:'#fff',

   
  })`
  
 
  `;