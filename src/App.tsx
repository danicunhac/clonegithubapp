import 'react-native-gesture-handler';

import React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import profileImg from '../assets/profile.png';

import { AppView, Header, Container } from './styles/app';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#161b21" />
      <AppView>
        <Header>
          <Icon
            name="settings"
            size={20}
            color={'#1a73e8'}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginRight: 16 }}
          />
          <Icon name="share" size={20} color={'#1a73e8'} />
        </Header>
        <Container>
          <Image src={profileImg} />
        </Container>
      </AppView>
    </NavigationContainer>
  );
};

export default App;
