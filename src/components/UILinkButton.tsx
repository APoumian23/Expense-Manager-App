import React from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';

interface Props {
  title: string;
  onPress: () => void;
  color?: string;
}

export default function UILinkButton({title, onPress, color}: Props) {
  return (
    <Button size="md" variant="link" onPress={onPress}>
      <ButtonText color={color}>{title}</ButtonText>
    </Button>
  );
}
