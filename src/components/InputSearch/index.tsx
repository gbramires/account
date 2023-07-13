import React from 'react';

import {Container, Icon, InputText} from './styles';

interface IInputProps {
  icon: string;
  placeholder: string;
  value: string;
  setValue(newValue: string): void;
}

export const InputSearch: React.FC<IInputProps> = ({
  icon,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <Container>
      <Icon name={icon} />
      <InputText
        placeholder={placeholder}
        value={value}
        onChangeText={(newValue: string) => setValue(newValue)}
      />
    </Container>
  );
};
