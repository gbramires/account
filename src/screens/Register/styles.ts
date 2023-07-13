import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled(GestureHandlerRootView)`
  background-color: ${({theme}) => theme.colors.background};
`;

export const Touch = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;
export const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  display: flex;
  width: 100%;

  padding: 0 ${RFValue(20)}px;
  height: ${RFPercentage(22)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const NavWrapper = styled.View`
  width: 100%;
  padding-top: ${RFValue(55)}px;
  margin-bottom: ${RFValue(25)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  color: #fff;
  padding-left: ${RFValue(5)}px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.secondary};
  align-items: center;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
  height: ${RFValue(598)}px;
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(20)}px;
  margin-top: -${RFPercentage(8)}px;
  padding-bottom: ${RFValue(100)}px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const TypeTransaction = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const AlertIcon = styled(Ionicons)`
  font-size: ${RFValue(55)}px;
  margin-top: 30px;
  color: ${({theme}) => theme.colors.attention};
`;
export const AlertText = styled.Text`
  font-size: ${RFValue(11)}px;
  padding: 14px;
`;

export const Action = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const TouchYes = styled(TouchableOpacity)`
  height: ${RFValue(35)}px;
  width: ${RFValue(100)}px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.attention};
`;
export const TextYes = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
`;

export const Box = styled.View`
  width: ${RFValue(260)}px;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  height: ${RFValue(250)}px;
  background-color: white;
`;

export const BoxText = styled.View`
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 16px;
  font-size: ${RFValue(14)}px;
  ::placeholder {
    color: #000;
  }
`;

export const Title = styled.Text`
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(8)}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.text_primary};
`;
