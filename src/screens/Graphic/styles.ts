import styled from "styled-components/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
`;

export const CircularProgressbar = styled(AnimatedCircularProgress).attrs(
  ({ theme }) => ({
    tintColor: theme.COLORS.GRAY_100,
    backgroundColor: theme.COLORS.GREEN_500,
    rotation: 5,
    size: 260,
    width: 10,
  })
)``;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: ${({theme})=> theme.COLORS.GRAY_100};
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
`;
