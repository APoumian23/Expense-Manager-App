import React from 'react';
import {Button, ButtonText, HStack, Text} from '@gluestack-ui/themed';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface Props {
  title: string;
  onPress: () => void;
  isNotRounded?: boolean;
  bg?: string;
  icon?: IconDefinition | null;
  iconSize?: number;
  iconColor?: string;
  hasIcon?: boolean;
}

export default function UIButton({
  title,
  onPress,
  isNotRounded,
  bg,
  icon,
  iconSize,
  iconColor,
  hasIcon,
}: Props) {
  return (
    <Button
      size="md"
      variant="solid"
      action="primary"
      borderRadius={isNotRounded ? '0' : '$full'}
      onPress={onPress}
      bg={bg ? bg : '$blue'}>
      <ButtonText>
        <HStack alignItems="center" justifyContent="center" pt={5} gap={'$1'}>
          <Text color="white">{title}</Text>
          {hasIcon && (
            //@ts-ignore
            <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
          )}
        </HStack>
      </ButtonText>
    </Button>
  );
}
