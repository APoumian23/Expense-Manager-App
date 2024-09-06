import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../pages/main/Dashboard';
import AddItem from '../pages/main/AddItem';

const Stack = createNativeStackNavigator();

export default function RoutesUser() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="addItem"
          component={AddItem}
          options={{headerTitle: 'Add Item'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
