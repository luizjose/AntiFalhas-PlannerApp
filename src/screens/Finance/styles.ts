import styled from "styled-components/native";


 export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_600};
    justify-content: space-around;
   
    padding: 35px;
 `;