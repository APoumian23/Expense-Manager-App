import React from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';

interface Props {
  title: string;
  onPress: () => void;
}

export default function UIButton({title, onPress}: Props) {
  return (
    <Button
      size="md"
      variant="solid"
      action="primary"
      borderRadius={'$full'}
      onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}
