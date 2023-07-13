import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';

import { Alert } from '@components/Alert';
import { DropDownList, IDataDDLProps } from '@components/DropDownList';
import { useTransactions } from '@hooks/Transactions';
import { IPlanProps } from 'global/types';

import { isValidCode, suggestNextCode } from './accountPlanLogic';
import {
  Content,
  Header,
  Icon,
  InputText,
  LeftView,
  Logo,
  NavWrapper,
  Title,
  Touch,
} from './styles';

export const Register: React.FC = () => {
  const navigation = useNavigation();
  const {getItemStorage, setItemStorage} = useTransactions();

  const [values, setValues] = useState<IPlanProps[]>([]);
  const [typeTransaction, setTypeTransaction] = useState<'in' | 'out'>();
  const [code, setCode] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [codeFather, setCodeFather] = useState<string>();
  const [acceptType, setTypeAccept] = useState<boolean>();
  const [dataDDL, setDataDDL] = useState<IDataDDLProps[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const getDdl = useCallback(async () => {
    const data = await getItemStorage();
    setValues(data);
    const ddl = data.map(item => ({
      key: item.code,
      value: `${item.code} - ${item.description}`,
      disabled: !item.acceptType,
    }));
    setDataDDL([{key: '', value: 'Raiz', disabled: false}, ...ddl]);
  }, [values]);

  useEffect(() => {
    getDdl();
  }, []);

  const showAlertMessage = (text: string) => {
    setAlertMessage(text);
    setShowAlert(true);
  };

  const handleSelectCodeFather = (selectValue: string) => {
    const {codeSuggest, codeFatherSuggest} = suggestNextCode(
      selectValue,
      values,
    );
    setCodeFather(codeFatherSuggest);
    setCode(codeSuggest);
  };

  const schema = Yup.object().shape({
    code: Yup.string().required('Código obrigatório'),
    description: Yup.string().required('Descrição obrigatória'),
    type: Yup.string().required('Tipo obrigatório'),
    codeFather: Yup.string(),
    acceptType: Yup.boolean().required('Aceita lançamentos obrigatório'),
  });

  const handleSave = async () => {
    try {
      await schema.validate({
        code,
        description,
        type: typeTransaction,
        codeFather,
        acceptType,
      });
    } catch (error) {
      const err = error as Yup.ValidationError;
      showAlertMessage(JSON.stringify(err.message));
      return;
    }

    if (!isValidCode(code as string)) {
      showAlertMessage('Código inválido');
      return;
    }

    const fatherIndex = values.findIndex(item => item.code === codeFather);
    if (values[fatherIndex].type !== typeTransaction) {
      showAlertMessage('O tipo não pode ser diferente do pai');
      return;
    }

    const newAccount = {
      code: code as string,
      description: description as string,
      type: typeTransaction as string,
      codeFather: codeFather as string,
      acceptType: acceptType as boolean,
    };

    await setItemStorage(newAccount);
    navigation.goBack();
  };

  return (
    <>
      <Header>
        <NavWrapper>
          <LeftView>
            <Touch onPress={() => navigation.goBack()}>
              <Icon name="chevron-back" />
            </Touch>
            <Logo>Inserir Conta</Logo>
          </LeftView>
          <Icon name="checkmark" onPress={handleSave} />
        </NavWrapper>
      </Header>
      <Content>
        <DropDownList
          title="Conta Pai"
          setSelected={handleSelectCodeFather}
          data={dataDDL}
          placeholder="Selecione uma conta"
          save="key"
        />
        <Title>Código</Title>
        <InputText placeholder="1.1" value={code} onChangeText={setCode} />
        <Title>Nome</Title>
        <InputText
          placeholder="Taxa condonimial"
          value={description}
          onChangeText={setDescription}
        />
        <DropDownList
          title="Tipo"
          setSelected={(text: string) =>
            setTypeTransaction(text as 'in' | 'out')
          }
          data={[
            {key: 'in', value: 'Receita'},
            {key: 'out', value: 'Despesa'},
          ]}
          search={false}
          placeholder="Selecione um tipo"
          save="key"
        />
        <DropDownList
          title="Aceita Lançamento"
          setSelected={(text: string) =>
            text === 'yes' ? setTypeAccept(true) : setTypeAccept(false)
          }
          data={[
            {key: 'yes', value: 'Sim'},
            {key: 'not', value: 'Não'},
          ]}
          search={false}
          placeholder="Selecione"
          save="key"
        />
      </Content>
      <Alert
        description={alertMessage}
        title=""
        visible={showAlert}
        icon="x-octagon"
        type="error"
        onClose={() => setShowAlert(false)}
      />
    </>
  );
};
