import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import { Body, Container, EditProfile, Header,Option, OptionText, ProfileImage, UserName } from "./styles";
import { Feather } from "phosphor-react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {


  return (
  
<Container >
<Header >
  <ProfileImage source={{ uri: 'https://via.placeholder.com/150' }}  />
  <UserName >Luiz Jose</UserName>
  <TouchableOpacity onPress={() => console.log('EditProfile')}>
    <EditProfile>Edit</EditProfile>
  </TouchableOpacity>
</Header>
<Body>
  <Option  style={styles.option}>
    <FontAwesome size={24} name="tasks" color="#fff" />
    <OptionText style={styles.optionOptionText}>Tarefas</OptionText>
  </Option>
  <Option style={styles.option}>
    <FontAwesome size={24} name="money" color="#fff" />
    <OptionText style={styles.optionOptionText}>Financeiro</OptionText>
  </Option>
  <Option style={styles.option}>
  <Feather size={24} name="settings" color="#fff" />
    <OptionText style={styles.optionOptionText}>Configurações</OptionText>
  </Option>
</Body>
</Container>
);
};

const styles = StyleSheet.create({



option: {
flexDirection: 'row',
gap: 15,

},
optionOptionText: {
fontSize: 18,
},
});
