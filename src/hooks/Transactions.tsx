import AsyncStorage from '@react-native-async-storage/async-storage';
import { codeExist } from '@screens/Register/accountPlanLogic';
import { IPlanProps } from 'global/types';
import React, {
  createContext,
  ReactNode,
  useContext,
} from 'react';

interface TransactionsProviderProps {
  children: ReactNode;
}
interface TransactionsContextData {
  getItemStorage(): Promise<IPlanProps[]>;
  setItemStorage(data: IPlanProps): Promise<IPlanProps | undefined>;
  removeItemStorage(code: string): Promise<void>;
  orderPlans(accounts: IPlanProps[]): IPlanProps[];
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({
  children,
}: TransactionsProviderProps): JSX.Element {
  const dataKey = '@planCount:transactions';

  const getItemStorage = async (): Promise<IPlanProps[]> => {
    const resolve = await AsyncStorage.getItem(dataKey);
    const transactions: IPlanProps[] =
      resolve !== null ? JSON.parse(resolve) : [];

    return transactions;
  };

  const orderPlans = (accounts: IPlanProps[]) => {
    return accounts.sort((a, b) => {
      if (a.codeFather !== b.codeFather) {
        return a.codeFather.localeCompare(b.codeFather);
      } else {
        return a.code.localeCompare(b.code);
      }
    });
  };

  const setItemStorage = async (
    data: IPlanProps,
  ): Promise<IPlanProps | undefined> => {
    const accounts = await getItemStorage();
    const exist = codeExist(data.code, accounts);
    if (!exist) {
      const array = [...accounts, data];
      const order = orderPlans(array);
      await AsyncStorage.setItem(dataKey, JSON.stringify(order));
      return data;
    }
  };

  const removeItemStorage = async (code: string): Promise<void> => {
    const accounts = await getItemStorage();
    const exist = codeExist(code, accounts);
    if (exist) {
      const resolve = await getItemStorage();
      const itemRemoved = resolve.filter(item => item.code !== code);
      await AsyncStorage.removeItem(dataKey);
      await AsyncStorage.setItem(dataKey, JSON.stringify(itemRemoved));
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        getItemStorage,
        setItemStorage,
        removeItemStorage,
        orderPlans,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}
