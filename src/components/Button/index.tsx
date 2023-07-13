import React from 'react';

import { Text, Touch } from './styles';

interface IButtonProps {
    text: string;
    type: 'link' | 'button';
    onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({text, type, onPress}) => {
  return (
    <Touch type={type} onPress={onPress}>
      <Text type={type}>{text}</Text>
    </Touch>
  );
};

export default Button;
