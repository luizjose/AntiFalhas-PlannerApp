import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  
  padding: 40px 10px 0 10px;
`;

// Componente SearchArea
export const SearchArea = styled.View`
  flex: .07;
  flex-direction: row;
  height: 50px;
  margin-top: 20px;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.GRAY_300}; /* Cor de fundo desejada */
  padding: 10px;
  border-radius: 15px;
`;

// Componente SearchLupa
export const SearchLupa = styled(MaterialIcons)`
  width: 24px;
  height: 24px;
`;

// Componente SearchInput
export const SearchInput = styled(TextInput)`
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
  color: #fff;
`;
export const DataItem = styled.View`
flex: .2;
    background-color: ${({theme})=> theme.COLORS.GRAY_100};
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
`;
export const DateInfo = styled.View`
    flex-direction: row;
`;
export const DatePrevArea = styled.TouchableOpacity`
    width: 30px;
    
    justify-content: center;
    align-items: center;
`;
export const NavPrevIcon = styled(MaterialIcons)`
  width: 24px;
  height: 24px;
`;
export const DateTitleArea = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const DateTitle = styled.Text`
color: #000;
font-size:16px;
font-weight: bold;
text-align: center;
`;
export const DateNextArea = styled.TouchableOpacity`
    width: 40px;
    
    justify-content: center;
    align-items: center;
`;
export const NavNextIcon = styled(MaterialIcons)`
  width: 24px;
  height: 24px;
`;
export const DateList = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px;

`;

export const DateItem = styled.TouchableOpacity`
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`
export const DateItemWeekDay = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const DateItemNumber = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const TodayTaskArea = styled.View`
   flex: 1;
   margin-top: 10px;
   height: 250px;
   
 `;
 export const TitleTask = styled.Text`
   
 color: ${({ theme }) => theme.COLORS.GREEN_700};
 font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
 font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
export const TaskTodayList = styled(ScrollView)`
flex: 1;
height: 200px;

padding: 5px 10px 20px 10px;


`;