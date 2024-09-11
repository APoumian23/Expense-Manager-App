import React, {useEffect, useState} from 'react';
import {Box, HStack, ScrollView, Text, VStack} from '@gluestack-ui/themed';
import UIButton from '../../components/UIButton';
import SummaryItem from '../../components/SummaryItem';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../redux/hooks';
import {faPlusMinus} from '@fortawesome/free-solid-svg-icons';

export default function AllItems() {
  const [incomes, setIncomes] = useState('');
  const [expenses, setExpenses] = useState('');
  const [total, setTotal] = useState('');

  const {expensesArray, incomesArray} = useAppSelector(state => state.main);
  const navigation = useNavigation();

  useEffect(() => {
    const incomesSum = incomesArray.reduce(
      (acc, income) => acc + +income.amount,
      0,
    );
    setIncomes(String(incomesSum));

    const expensesSum = expensesArray.reduce(
      (acc, expense) => acc + +expense.amount,
      0,
    );
    setExpenses(String(expensesSum));

    const total = incomesSum - expensesSum;
    setTotal(String(total));
  }, [incomesArray, expensesArray]);

  function addExpenseHandler() {
    //@ts-ignore
    navigation.navigate('addItem');
  }

  return (
    <Box flex={1}>
      <HStack
        flex={1}
        bg="$blueGray50"
        justifyContent="space-between"
        alignItems="center"
        px={10}>
        <Text fontSize={24}>Welcome Back, Alex</Text>
        <UIButton
          hasIcon={true}
          icon={faPlusMinus}
          iconColor="white"
          iconSize={15}
          title="Add"
          onPress={addExpenseHandler}
        />
      </HStack>
      <VStack
        flex={3}
        bg="$blueGray100"
        gap={'$1.5'}
        justifyContent="center"
        px={10}>
        <SummaryItem
          title="Incomes:"
          value={new Intl.NumberFormat('en-EN').format(+incomes)}
        />
        <SummaryItem
          title="Expenses:"
          value={new Intl.NumberFormat('en-EN').format(+expenses)}
          isExpense={true}
        />
        <SummaryItem
          title="Balance:"
          value={new Intl.NumberFormat('en-EN').format(+total)}
          isBalance={true}
        />
      </VStack>
      <Box flex={8} bg="$blueGray200">
        <ScrollView pt={15}>
          {/* @ts-ignore */}
          {expensesArray.concat(incomesArray).map((item, index) => (
            <HStack
              key={index}
              justifyContent="space-between"
              alignItems="center"
              mb={15}
              px={15}>
              <VStack gap={5}>
                <Text>{item.date}</Text>
                <Text fontSize={20} fontWeight={'$bold'}>
                  {item.title}
                </Text>
                <Text>{item.des}</Text>
              </VStack>
              <Box
                bg={item.type === 'Expense' ? 'red' : 'green'}
                px={30}
                py={10}
                borderRadius={9}>
                <Text color="white">
                  {item.type === 'Expense'
                    ? `-$${new Intl.NumberFormat('en-EN').format(+item.amount)}`
                    : `$${new Intl.NumberFormat('en-EN').format(+item.amount)}`}
                </Text>
              </Box>
            </HStack>
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
}
