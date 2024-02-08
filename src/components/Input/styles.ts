import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native';



export const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme})=> theme.COLORS.GRAY_300};
    padding: 7px 0;
    margin: 10px 0;
`;

export const Icon = styled(MaterialIcons).attrs({
    size: 24,
    color:'#C4C4CC',

   
  })`
  margin-right: 8px;
 
  `;

export const CustomInput = styled(TextInput)`
  flex: 1;
  font-size: 18px;
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  color: ${({theme})=> theme.COLORS.GRAY_200};
`;
