import { ScrollView } from "react-native";
import styled from "styled-components/native";


 export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
  
   
    padding: 40px 20px 0 20px;
 `;
 export const WelcomeArea = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 `;
 export const WelcomeTextArea = styled.View`
 flex: 1;

 `;
 export const UserText = styled.Text`
    color: ${({theme})=> theme.COLORS.GREEN_700};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
 `;
 export const DescriptionText = styled.Text`
  color: ${({theme})=> theme.COLORS.GRAY_200};
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.SM}px;`;
 export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    padding-top: 12px;
 `;
 export const MyTaskArea  = styled.View`
      flex: 1;
     top: 25px;
   
 `;
 export const TitleTask = styled.Text`
    color: ${({theme})=> theme.COLORS.GREEN_700};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
 `;

 export const CardTasks = styled.View`

  flex-direction: row;
  flex-wrap: wrap;
   align-items:flex-start;
   
 `;
   export const TodayTaskArea  = styled.View`
  flex: 1;
  top: 70px;
 `;
export const TaskTodayList = styled(ScrollView)`
margin-top: 5px;
padding: 0 10px 15px 10px;
margin-bottom: 70px;

`;
