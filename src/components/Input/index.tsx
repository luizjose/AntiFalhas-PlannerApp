import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { CustomInput, Icon, InputContainer } from './styles';



export function InputWithIcon({ icon, placeholder, password, ...rest }) {
  return (
    <InputContainer >
      <Icon name={icon} />
      <CustomInput 
      placeholder={placeholder} 
      placeholderTextColor="#C4C4CC" {...rest}
      secureTextEntry={password}
      />
    </InputContainer>
  );
};

