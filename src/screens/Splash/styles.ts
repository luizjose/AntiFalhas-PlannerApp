import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    justify-content: space-around;
    align-items: center;
    padding: 100px 50px;
 `;
export const LogoImg = styled.Image`
 margin-top: 84px;
    width: 245px;
   
    height: 248px;
  
`;
export const DescriptionArea = styled.View`
  margin-top: 50px;
  
  justify-content: center;
  align-items: center;

`;
export const LogoText = styled.Text`
    color:${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    text-align: center;
    margin-top: 75px;
`;
export const DescriptionText = styled.Text`
    margin-top: 16px;
    color:${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    text-align: center;
`;
export const ButtonsArea = styled.View`
   
    margin-top: 65px;
    
`;
export const ButtonSemFundo = styled(TouchableOpacity)`
    min-height: 56px;
    max-height: 56px;

    min-width: 100%;
    justify-content: center;
    align-items: center;
`;
export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

`;

