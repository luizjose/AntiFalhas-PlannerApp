import styled from "styled-components/native";
 export const Container = styled.View`
 flex: 1;
 background-color: ${({theme})=> theme.COLORS.GRAY_600};
 justify-content: center;
 align-items: center;
 padding: 20px;
 `;
 export const LogoImg = styled.Image`
 width: 104px;
height: 97px;
 margin-bottom: 20px;
`;

 export const Logo = styled.Text`
    color: ${({theme})=> theme.COLORS.WHITE};
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};

 `;
 export const Loading = styled.ActivityIndicator.attrs(({theme})=>({
    color: theme.COLORS.GRAY_200
 }))`
 margin-top:20px;
 `;
 