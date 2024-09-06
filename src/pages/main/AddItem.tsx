import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {HStack, VStack} from '@gluestack-ui/themed';
import UIButton from '../../components/UIButton';
import UIInput from '../../components/UIInput';
import {useNavigation} from '@react-navigation/native';

export default function AddItem() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [des, setDes] = useState('');
  const [type, setType] = useState('Expense');

  const navigation = useNavigation();

  function toggleIncomeOrExpenseHandler(type: string) {
    if (type === '-') {
      setType('Expense');
    } else if (type === '+') {
      setType('Income');
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function addNewItemHandler() {}

  return (
    <VStack gap={30} px={20}>
      <HStack justifyContent="center" alignItems="center" gap={5} pt={10}>
        <UIButton
          title="-"
          onPress={() => toggleIncomeOrExpenseHandler('-')}
          isNotRounded
        />
        <UIButton
          title="+"
          onPress={() => toggleIncomeOrExpenseHandler('+')}
          isNotRounded
        />
      </HStack>
      <VStack gap={10}>
        <UIInput
          onChangeText={setTitle}
          placeholder="Title"
          type="text"
          value={title}
        />
        <UIInput
          onChangeText={setAmount}
          placeholder="Amount"
          type="text"
          value={amount}
        />
        <UIInput
          onChangeText={setDes}
          placeholder="Description (Optional)"
          type="text"
          value={des}
        />
      </VStack>
      <HStack justifyContent="space-between">
        <UIButton title="Cancel" onPress={cancelHandler} />
        <UIButton
          title={`Add New ${type === 'Expense' ? 'Expense' : 'Income'}`}
          onPress={addNewItemHandler}
          bg={type === 'Expense' ? 'red' : 'green'}
        />
      </HStack>
    </VStack>
  );
}
