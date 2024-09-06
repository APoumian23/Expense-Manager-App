import React from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';

interface Props {
  title: string;
  onPress: () => void;
  isNotRounded?: boolean;
  bg?: string;
}

export default function UIButton({title, onPress, isNotRounded, bg}: Props) {
  return (
    <Button
      size="md"
      variant="solid"
      action="primary"
      borderRadius={isNotRounded ? '0' : '$full'}
      onPress={onPress}
      bg={bg}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}
