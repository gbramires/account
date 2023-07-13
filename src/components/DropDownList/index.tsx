import React from 'react';
import { SelectList, SelectListProps } from 'react-native-dropdown-select-list';
import { Container, Text } from './styles';

export interface IDataDDLProps {
  key: string;
  value: string;
  disabled?: boolean;
}

interface IDropDownListProps extends SelectListProps {
  title: string;
  data: IDataDDLProps[];
}

export function DropDownList({title, data, ...rest}: IDropDownListProps) {
  return (
    <Container>
      <Text>{title}</Text>
      <SelectList
        data={data}
        {...rest}
        boxStyles={{
          backgroundColor: '#fff',
          borderColor: '#fff',
   
        }}
      />
    </Container>
  );
}
