import React from 'react';
import {Box, HStack, Text, VStack} from '@gluestack-ui/themed';
import UIButton from '../../components/UIButton';
import SummaryItem from '../../components/SummaryItem';
import {useNavigation} from '@react-navigation/native';

export default function ExpenseItems() {
  const navigation = useNavigation();

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
        <Text fontSize={24}>All Expenses</Text>
        <UIButton title="Add" onPress={addExpenseHandler} />
      </HStack>
      <VStack
        flex={1}
        bg="$blueGray100"
        gap={'$1.5'}
        justifyContent="center"
        px={10}>
        <SummaryItem title="Expenses:" value="0" isExpense={true} />
      </VStack>
      <Box flex={8} bg="$blueGray200"></Box>
    </Box>
  );
}
