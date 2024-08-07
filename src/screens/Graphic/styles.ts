import styled from "styled-components/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
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
export const Title = styled.Text`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: ${({theme})=> theme.COLORS.GRAY_100};
`;
export const Text = styled.Text`
  font-weight: 700;
  font-size: 42px;
  line-height: 58px;
  color: ${({theme})=> theme.COLORS.GRAY_100};
`;
export const AreaPomodoro = styled.View`
height: 550px;
justify-content: space-between;
align-items: center;
border-radius: 20px;
padding: 50px;
background-color: ${({theme})=> theme.COLORS.GRAY_400};
`;
export const AreaButton = styled.View`
flex: 0.2;
width: 250px;
flex-direction: row;
justify-content: space-around;
gap: 20px;
`;
export const ButtonTimes = styled.TouchableOpacity`

width: 110px;
height: 35px;
border-radius: 5px;

background-color: #000;
align-items: center;
padding: 5px 10px 5px 10px;
`;
export const TextButton = styled.Text`
color: #fff;
font-size: 16px;
text-transform: uppercase;
`;