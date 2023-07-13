import React from 'react';

import {IPlanProps} from 'global/types';
import {
  CountRegister,
  EmptyText,
  IconOff,
  List,
  ListContent,
  ListFlat,
  ListHeader,
  ListIcon,
  ListTitle,
  TextIn,
  TextOut,
} from './styles';

interface IListViewProps {
  list: IPlanProps[];
  title: string;
  onPress: (item: IPlanProps) => void;
}

export const ListView: React.FC<IListViewProps> = ({list, title, onPress}) => {
  return (
    <List>
      <ListHeader>
        <ListTitle>{title}</ListTitle>
        {list.length > 0 && (
          <CountRegister>{`${list.length} registros`}</CountRegister>
        )}
      </ListHeader>
      {list.length > 0 && (
        <ListFlat>
          {list.map((plan, index) => (
            <ListContent key={index}>
              {plan.type === 'in' ? (
                <TextIn>{`${plan.code} - ${plan.description}`}</TextIn>
              ) : (
                <TextOut>{`${plan.code} - ${plan.description}`}</TextOut>
              )}
              <ListIcon onPress={() => onPress(plan)} name="trash" />
            </ListContent>
          ))}
        </ListFlat>
      )}
      {list.length === 0 && (
        <>
          <EmptyText>Nenhum registros encontrado</EmptyText>
          <IconOff name="circle-off-outline" />
        </>
      )}
    </List>
  );
};
