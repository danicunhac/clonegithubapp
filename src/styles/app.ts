import styled from 'styled-components';
import { Image, Text, View } from 'react-native';

export const AppView = styled(View)`
  flex: 1;
  background: #161b21;
`;

export const Header = styled(View)`
  height: 56px;
  border-bottom-width: 0.5px;
  border-bottom-color: #8b949e;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Container = styled(View)`
  padding: 0 16px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfilePicture = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-right: 16px;
`;

export const UserName = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const UserNickname = styled(Text)`
  font-size: 16px;
  color: #8b949e;
`;

export const Status = styled(Text)`
  color: rgba(240, 240, 0, 0.95);
  font-size: 16px;
  background-color: rgba(170, 150, 0, 0.3);
  padding: 8px;
  border-radius: 4px;
  flex: 1;
`;

export const Description = styled(Text)`
  color: #fff;
  display: flex;
  font-size: 16px;
  padding: 0 16px 16px;
`;

export const ProfileDescription = styled(View)`
  border-bottom-width: 0.5px;
  border-bottom-color: #8b949e;
`;

export const ReadMe = styled(View)`
  border-top-width: 0.5px;
  border-top-color: #8b949e;
  padding: 0 16px;
`;
