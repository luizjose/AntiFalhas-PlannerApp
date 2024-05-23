import { ScrollView } from "react-native";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
   gap: 10px;
   
    padding: 30px 15px 0 15px;
 `;
export const WelcomeArea = styled.View`
   flex: 0.3;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 `;
export const WelcomeTextArea = styled.View`
 flex: 1;

 `;
export const UserText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
 `;
export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;`;
export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    padding-top: 12px;
 `;
export const MyTaskArea = styled.View`
flex: 1.6;
height: 320px;
 `;
export const TitleTask = styled.Text`
   
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
 `;

export const CardTasks = styled.View`
   flex: 1;

   flex-direction: row;
   height: 340px;
   flex-wrap: wrap;
   flex:1;
 `;
export const TodayTaskArea = styled.View`
   flex: 1;
   
   height: 250px;
   
 `;
export const TaskTodayList = styled(ScrollView)`
flex: 1;
height: 200px;

padding: 5px 10px 20px 10px;


`;
