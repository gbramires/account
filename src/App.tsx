import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { TransactionsProvider } from './hooks/Transactions';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <TransactionsProvider>
          <Routes />
        </TransactionsProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
