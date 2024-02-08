import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';

// Estilos utilizando styled-components
export const CardContainer = styled.View`
flex: 1;      
flex-direction :row ;
  background-color: #ffffff;
  border-radius: 10px ;
margin-bottom: 20px;
  padding: 10px 10px 15px 15px;
  top:10px;
`;

export const LeftBar = styled.View`
margin-top: 15px;
  width: 2px;
  height: 35px;
  margin-right: 10px;
  background-color: #000;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    
`;

export const TimeText = styled(Text)`
  font-size: 12px;
  color: #000;
`;
export const StatusText = styled(Text)`
margin-top: 25px;
  font-size: 10px;


`;

export const ExpandButton = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 8px;
`;