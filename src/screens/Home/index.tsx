import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import { InputSearch } from '@components/InputSearch';
import { ListView } from '@components/ListView';
import { IPlanProps } from 'global/types';

import { Alert } from '@components/Alert';
import { useTransactions } from '@hooks/Transactions';
import { Container, Content, Header, Icon, Logo, NavWrapper } from './styles';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const {getItemStorage, removeItemStorage, orderPlans} = useTransactions();
  const [values, setValues] = useState<IPlanProps[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<IPlanProps[]>([]);

  const handleRemoveItem = async (code: string) => {
    await removeItemStorage(code);
    loadPage();
    handleSearch(search);
    setShowAlert(false);
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [code, setCode] = useState('');
  const [load, setLoad] = useState(false);

  const showAlertMessage = (item: IPlanProps) => {
    setCode(item.code);
    setAlertMessage(`${item.code} - ${item.description}`);
    setShowAlert(true);
  };

  const handleSearch = useCallback(
    (newValue: string) => {
      setSearch(newValue);
      if (newValue.length > 0 && values.length > 0) {
        const data = values.filter(plan => {
          const normalizedDescription = plan.description
            .toLowerCase()
            .replace(/[^a-zA-Zs]/g, '');
          const normalizedNewValue = newValue
            .toLowerCase()
            .replace(/[^a-zA-Zs]/g, '');
          return normalizedDescription.includes(normalizedNewValue);
        });
        setFilter(data.length > 0 ? data : []);
      } else {
        setFilter(values);
      }
    },
    [values],
  );

  const loadPage = async () => {
    const data = orderPlans(await getItemStorage());
    setSearch('');
    setValues(data);
    setFilter(data);
  };

  useEffect(() => {
    loadPage();
    navigation.addListener('focus', ()=>setLoad(!load))
  }, [load, navigation]);

  return (
    <Container>
      <Header>
        <NavWrapper>
          <Logo>Plano de Contas</Logo>
          {/* @ts-ignore: Unreachable code error*/}
          <Icon name="add" onPress={() => navigation.navigate('register')} />
        </NavWrapper>
        <InputSearch
          placeholder="Pesquisar Conta"
          icon="search"
          value={search}
          setValue={handleSearch}
        />
      </Header>
      <Content>
        <ListView title={'Listagem'} list={filter} onPress={showAlertMessage} />
      </Content>
      <Alert
        icon="trash"
        type='delete'
        visible={showAlert}
        title={'Deseja excluir a conta'}
        description={alertMessage}
        onConfirm={() => handleRemoveItem(code)}
        onClose={() => setShowAlert(false)}
      />
    </Container>
  );
};
