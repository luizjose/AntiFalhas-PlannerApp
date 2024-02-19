
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styled from 'styled-components/native';
export const Container = styled.View`
flex: 1;
`;
export const CircularProgressbar = styled(AnimatedCircularProgress).attrs(
    ({ theme }) => ({
      tintColor: theme.COLORS.GRAY_100,
      backgroundColor: theme.COLORS.GREEN_500,
      rotation: 0,
      size: 240,
      width: 5,
      tintTransparency: true
    })
  )``;
  export const Text = styled.Text`
  font-weight: 700;
  font-size: 42px;
  line-height: 58px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
`;