import React from 'react';

import Button from '@components/Button';
import { Container, Description, Icon, Modal, Row, Title } from './styles';

interface IAlertProps {
  icon: string;
  title: string;
  description: string;
  type: 'error' | 'delete';
  visible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export const Alert: React.FC<IAlertProps> = ({
  icon,
  title,
  description,
  type,
  visible,
  onClose,
  onConfirm=() => {},
}) => {
  if (type === 'error')
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onClose();
        }}>
        <Container>
          <Icon name={icon} />
          <Description>{description}</Description>
          <Button type='button' onPress={() => onClose()} text={'Entendi!'} />
        </Container>
      </Modal>
    );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}>
      <Container>
        <Icon name={icon} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Row>
          <Button type='link' onPress={() => onClose()} text={'Não!'} />
          <Button type='button' onPress={() => onConfirm()} text={'Com certeza'} />
        </Row>
      </Container>
    </Modal>
  );
};
