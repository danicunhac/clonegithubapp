/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';
import profileImg from '../assets/profile.png';

import {
  AppView,
  Header,
  Container,
  ProfilePicture,
  UserName,
  UserNickname,
  Status,
  Description,
  ProfileDescription,
  ReadMe,
} from './styles/app';

interface UserData {
  login: string;
  name: string;
  company: string;
  location: string;
  avatar_url: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
}

const App = () => {
  const [user, setUser] = useState({} as UserData);

  useEffect(() => {
    fetch('https://api.github.com/users/danicunhac')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#161b21" />
      <AppView>
        <Header>
          <FeatherIcon
            name="settings"
            size={20}
            color={'#1a73e8'}
            style={{ marginRight: 16 }}
          />
          <FeatherIcon name="share" size={20} color={'#1a73e8'} />
        </Header>
        <Container>
          <ProfilePicture source={profileImg} />
          <View>
            <UserName>{user.name}</UserName>
            <UserNickname>{user.login}</UserNickname>
          </View>
        </Container>
        <Container>
          <Status>🧪 Always coding 🚀🔥</Status>
        </Container>
        <ProfileDescription>
          <Description>{user.bio}</Description>
          <Description>
            <FAIcon name="building-o" size={20} color={'#8b949e'} />{' '}
            {user.company}
          </Description>
          <Description style={{ color: '#8b949e' }}>
            <OctIcon name="location" size={20} color={'#8b949e'} />{' '}
            {user.location}
          </Description>
          <Description>
            <FeatherIcon name="link" size={20} color={'#8b949e'} /> {user.blog}
          </Description>
          <Description>
            <FeatherIcon name="mail" size={20} color={'#8b949e'} />{' '}
            danielcc.jp@gmail.com
          </Description>
          <Description>
            <FeatherIcon name="user" size={20} color={'#8b949e'} />{' '}
            {user.followers} <Text style={{ color: '#8b949e' }}>followers</Text>{' '}
            {user.following} <Text style={{ color: '#8b949e' }}>following</Text>
          </Description>
        </ProfileDescription>
        <View style={{ height: 16, backgroundColor: '#0f0f0f' }} />
        <ReadMe>
          <Text
            style={{
              color: '#fff',
              padding: 16,
              borderBottomColor: '#8b949e',
              borderBottomWidth: 0.5,
              display: 'flex',
              alignItems: 'center',
            }}>
            <FeatherIcon name="smile" size={20} color={'#8b949e'} />{' '}
            {user.login}/README<Text style={{ color: '#8b949e' }}>.md</Text>
          </Text>
        </ReadMe>
      </AppView>
    </NavigationContainer>
  );
};

export default App;
