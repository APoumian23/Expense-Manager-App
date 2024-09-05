import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

interface Props {
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;
  value: string;
  type: 'password' | 'text';
  autoCapitalize?: 'none' | 'words' | 'sentences' | 'characters';
}

export default function UIInput({
  placeholder,
  onChangeText,
  value,
  type,
  autoCapitalize,
}: Props) {
  return (
    <Input variant="outline" size="lg" borderRadius={'$lg'}>
      <InputField
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        type={type}
        autoCapitalize={autoCapitalize}
      />
    </Input>
  );
}
