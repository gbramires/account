import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  display: flex;
  width: 100%;

  padding: 0 ${RFValue(20)}px;
  height: ${RFPercentage(32)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
  height: ${RFValue(598)}px;
  width: 100%;
  padding: ${RFValue(8)}px ${RFValue(8)}px;
  margin-top: -${RFPercentage(8)}px;
  padding-bottom: ${RFValue(100)}px;
`;

export const NavWrapper = styled.View`
  width: 100%;
  padding-top: ${RFValue(36)}px;
  padding-bottom: ${RFValue(4)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  font-size: ${RFValue(22)}px;
  color: #fff;
  font-weight: bold;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(36)}px;
  color: #fff;
  margin-right: ${RFValue(12)}px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
