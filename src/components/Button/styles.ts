import theme from '@global/styles/theme';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export interface ITouchableOpacityProps {
  type: 'link' | 'button';
}

interface ITextProps {
  type?: string;
}

export const Touch = styled.TouchableOpacity<ITouchableOpacityProps>`
  ${({type}) => {
    if (type === 'button') {
      return `
                border-radius: ${RFPercentage(25)}px;
                background-color: ${theme.colors.attention};
                padding: ${RFPercentage(2)}px;
                margin: ${RFPercentage(2)}px;
                
                `;
    }
    return `
            padding: 0;
            margin: 0;
            `;
  }};
`;

export const Text = styled.Text<ITextProps>`
  font-weight: bold;
  text-align: center;
  color: ${({type}) => type === 'button' ? theme.colors.secondary : theme.colors.attention};
`;
