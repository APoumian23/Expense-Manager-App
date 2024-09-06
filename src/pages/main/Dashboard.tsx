import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import UILinkButton from '../../components/UILinkButton';
import {useAppDispatch} from '../../redux/hooks';
import {logOutUser} from '../../redux/slices/mainSlice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllItems from './AllItems';
import IncomeItems from './IncomeItems';
import ExpenseItems from './ExpenseItems';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <UILinkButton
          title="Cerrar Sesión"
          onPress={() => {
            dispatch(logOutUser());
          }}
        />
      ),
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="allItems"
        component={AllItems}
        options={{tabBarLabel: 'Dashboard'}}
      />
      <Tab.Screen
        name="incomeItems"
        component={IncomeItems}
        options={{tabBarLabel: 'Income'}}
      />
      <Tab.Screen
        name="expenseItems"
        component={ExpenseItems}
        options={{tabBarLabel: 'Expense'}}
      />
    </Tab.Navigator>
  );
}
