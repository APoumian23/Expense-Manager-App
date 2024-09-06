import React, {useState} from 'react';
import {Heading, VStack} from '@gluestack-ui/themed';
import {Text} from 'react-native';
import UIInput from '../../components/UIInput';
import UIButton from '../../components/UIButton';

export default function ForgotPassword() {
  const [forgotpassword, setForgotPassword] = useState('');

  function sendEmailHandler() {
    console.log('Enviado');
  }

  return (
    <VStack flex={1} justifyContent="center" gap={20} px={25}>
      <VStack gap={20}>
        <Heading>Ingresa tu Correo</Heading>
        <Text>
          Te enviaremos un código de 6 dígitos a tu Correo para recuperar tu
          contraseña
        </Text>
        <VStack></VStack>
      </VStack>
      <VStack>
        <UIInput
          placeholder="Email"
          onChangeText={setForgotPassword}
          value={forgotpassword}
          type="text"
          autoCapitalize="none"
        />
      </VStack>
      <UIButton title="Siguiente" onPress={sendEmailHandler} />
    </VStack>
  );
}
