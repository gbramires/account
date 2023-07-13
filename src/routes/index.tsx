import theme from '@global/styles/theme';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens/Home';
import { Register } from '@screens/Register';
import React from 'react';

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    initialRouteName="home"
    screenOptions={{
      headerShown: false,
      headerStyle: {backgroundColor: theme.colors.primary},
    }}>
    <Route.Screen name="home" component={Home} />
    <Route.Screen name="register" component={Register} />
  </Route.Navigator>
);

export default Routes;
