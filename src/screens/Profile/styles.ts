import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${({theme})=> theme.COLORS.GRAY_600};

`;

export const Header = styled.View`
  background-color: ${({theme})=> theme.COLORS.GRAY_400};
  padding: 30px 20px;

  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
  margin-top: 10px;
`;

export const EditProfile = styled.Text`
  color: ${({theme})=> theme.COLORS.GREEN_500};
  font-size: 16px;
  margin-top: 5px;
`;

export const Body = styled.ScrollView`
  padding: 10px 20px 20px 20px;
  background-color: ${({theme})=> theme.COLORS.GRAY_600};
  
`;

export const Option = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px;
  background-color: ${({theme})=> theme.COLORS.GRAY_400};
  margin: 5px;
  border-radius: 10px;

`;

export const OptionText = styled.Text`
  font-size: 18px;
  color: ${({theme})=> theme.COLORS.WHITE};
`;