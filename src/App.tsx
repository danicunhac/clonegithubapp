import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppView } from './styles/app';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#161b21" />
      <AppView>
        <Text>Github Profile</Text>
      </AppView>
    </NavigationContainer>
  );
};

export default App;
