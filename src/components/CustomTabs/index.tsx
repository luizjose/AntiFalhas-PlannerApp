import React from 'react';
import { Container, Icon, IconCenter, TabArea, TabItem, TabItemCenter } from './styles';

interface Props{
    state:any;
    navigation:any;
}


export default function CustomTabs({ state, navigation }:Props)  {

 console.log(state)

  const goTo = (screenName:any) => {
    navigation.navigate(screenName);
  }
  return (
    <Container>
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <Icon  name='home' style={{ color: state.index === 0 ? '#00B37E' : '#7C7C8A' }}  />
      </TabItem>
      <TabItem onPress={() => goTo('Task')}>
        <Icon  name='article' style={{ color: state.index === 1 ? '#00B37E' : '#7C7C8A' }}  />
      </TabItem>
      <TabItemCenter>
        <IconCenter name='plus' />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Graphic')}>
        <Icon  name='analytics' style={{ color: state.index === 2 ? '#00B37E' : '#7C7C8A' }}  />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <Icon  name='account-circle' style={{ color: state.index === 3 ? '#00B37E' : '#7C7C8A' }}  />
      </TabItem>
    </TabArea>
    </Container>
  );
}