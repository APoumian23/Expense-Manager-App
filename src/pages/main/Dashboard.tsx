import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import UILinkButton from '../../components/UILinkButton';
import {useAppDispatch} from '../../redux/hooks';
import {logOutUser} from '../../redux/slices/mainSlice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllItems from './AllItems';
import IncomeItems from './IncomeItems';
import ExpenseItems from './ExpenseItems';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faMoneyBillTrendUp,
  faSackXmark,
} from '@fortawesome/free-solid-svg-icons';

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
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHouse} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="incomeItems"
        component={IncomeItems}
        options={{
          tabBarLabel: 'Income',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon
              icon={faMoneyBillTrendUp}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="expenseItems"
        component={ExpenseItems}
        options={{
          tabBarLabel: 'Expense',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faSackXmark} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
