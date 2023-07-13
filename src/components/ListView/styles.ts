import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.shape};
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
`;

export const TextIn = styled.Text`
  color: ${({theme}) => theme.colors.in};
  font-size: ${RFValue(15)}px;
`;

export const TextOut = styled.Text`
  color: ${({theme}) => theme.colors.out};
  font-size: ${RFValue(15)}px;
`;

export const EmptyText = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_primary};
  margin-left: ${RFPercentage(8)}px;
  margin-top: ${RFPercentage(17)}px;
`;
export const List = styled.ScrollView`
  margin: 0 ${RFValue(20)}px;
`;
export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(20)}px 0;
`;
export const ListTitle = styled.Text`
  font-size: ${RFValue(20)}px;
`;
export const CountRegister = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_secondary};
`;

export const ListFlat = styled.ScrollView``;

export const ListContent = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.secondary};
  height: ${RFValue(56)}px;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${RFValue(20)}px;
  margin-bottom: ${RFValue(13)}px;
  border-radius: 16px;
`;
export const ListIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text_secondary};
`;

export const IconOff = styled(MaterialCommunityIcons)`
  margin-top: ${RFValue(30)}px;
  font-size: ${RFPercentage(18)}px;
  color: ${({theme}) => theme.colors.attention};
  margin-left: 30%;
  margin-right: 30%;
`;
