import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 100px;
  height: ${RFValue(56)}px;
  padding: 0 ${RFValue(35)}px;
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text_secondary};
  margin-right: ${RFValue(20)}px;
`;
export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(15)}px;
`;
