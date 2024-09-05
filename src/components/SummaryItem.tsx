import React from 'react';
import {HStack, Text} from '@gluestack-ui/themed';

interface Props {
  title: string;
  value: string;
  isExpense?: boolean;
  isBalance?: boolean;
}

export default function SummaryItem({
  title,
  value,
  isExpense,
  isBalance,
}: Props) {
  return (
    <HStack
      bg="$blueGray400"
      justifyContent="space-between"
      alignItems="center"
      px={45}
      py={10}
      borderRadius={8}>
      <Text color="$white" fontWeight={'$bold'}>
        {title}
      </Text>
      <Text color={isExpense ? '$red' : isBalance ? '$white' : '$green'}>
        ${value}
      </Text>
    </HStack>
  );
}
