import styled from "styled-components/native";


 export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
    justify-content: space-around;
   
    padding: 35px;
 `;
 export const TitleLogin = styled.Text`
    color: ${({theme})=> theme.COLORS.GREEN_700};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
 `;
 export const FormLogin = styled.View`

 `;
 export const ButtonForgot = styled.TouchableOpacity`
 width: 100%;
 align-items: flex-end;
 margin-bottom:55px;
 `;
 export const TextForgot = styled.Text`
  font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
  color: ${({theme})=> theme.COLORS.GREEN_700};
  `;
 export const SignUpArea = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: center;
 `;
 export const TextSignUp = styled.Text`
   font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
   color: ${({theme})=> theme.COLORS.GREEN_700};
 `;
 export const TextSignUpBold = styled.Text`
 font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
 color: ${({theme})=> theme.COLORS.GREEN_500};
`;
export const AreaLoginSocial= styled.View`
width: 100%;
justify-content: center;
align-items: center;
`;
export const AreaTitle = styled.View`
flex-direction: row;
align-items: center;

`;
export const TitleLoginSocial = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    color: ${({theme})=> theme.COLORS.GRAY_200};
    margin-left: 10px;
    margin-right: 10px;
`;
export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${({theme})=> theme.COLORS.GRAY_200};
 
`;
export const IconSocial = styled.Image`
width: 30px;
height: 30px;
`;