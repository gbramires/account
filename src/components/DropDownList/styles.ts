import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Text = styled.Text`
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(8)}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const Container = styled.View`
  margin-bottom: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_primary};
`;

