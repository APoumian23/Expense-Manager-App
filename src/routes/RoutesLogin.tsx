import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import ForgotPassword from '../pages/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function RoutesLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, headerBackTitleVisible: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="createAccount"
          component={CreateAccount}
          options={{headerShown: true, title: 'Crear Cuenta'}}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{headerShown: true, title: 'Recuperar Contraseña'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
