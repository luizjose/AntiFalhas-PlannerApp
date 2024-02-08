import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  flex: 1;
  min-width: 100%;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme}) =>  theme.COLORS.GREEN_700};

  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;