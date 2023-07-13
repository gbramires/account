import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Modal = styled.Modal`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.View`
  background-color: #fff;
  border-radius: ${RFValue(10)}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${RFPercentage(33)}px  ${RFPercentage(6)}px;
`;

export const Icon = styled(Feather)`
  margin: ${RFValue(28)}px;
  font-size: ${RFValue(50)}px;
  color: ${({theme}) => theme.colors.attention};
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  justify-content: center;
  color: ${({theme}) => theme.colors.text_primary};
`;
export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  justify-content: center;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text_primary};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(10)}px;
`;
