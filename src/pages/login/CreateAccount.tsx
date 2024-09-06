import React, {useState} from 'react';
import {Heading, VStack} from '@gluestack-ui/themed';
import UIInput from '../../components/UIInput';
import UIButton from '../../components/UIButton';
import {Alert} from 'react-native';

export default function CreateAccount() {
  const [name, setName] = useState('');
  const [lastNameDad, setLastNameDad] = useState('');
  const [lastNameMom, setLastNameMom] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  function createAccountHandler() {
    if (!name || !lastNameDad || !lastNameMom || !gender || !date) {
      Alert.alert('Ingresa todos los datos');
      return;
    }
    console.log('Creada');
  }

  return (
    <VStack flex={1} justifyContent="center" bg="$secondary0">
      <Heading mb="$10" size="md" ml={'$1/4'}>
        Ingresa Datos Personales
      </Heading>
      <VStack gap={20} px={25}>
        <UIInput
          placeholder="Nombre(s)"
          onChangeText={setName}
          value={name}
          type="text"
          autoCapitalize="none"
        />
        <UIInput
          placeholder="Apellido paterno"
          onChangeText={setLastNameDad}
          value={lastNameDad}
          type="text"
        />
        <UIInput
          placeholder="Apellido materno"
          onChangeText={setLastNameMom}
          value={lastNameMom}
          type="text"
        />
        <UIInput
          placeholder="Género"
          onChangeText={setGender}
          value={gender}
          type="text"
        />
        <UIInput
          placeholder="Fecha de Nacimiento"
          onChangeText={setDate}
          value={date}
          type="text"
        />
        <UIButton title="Siguiente" onPress={createAccountHandler} />
      </VStack>
    </VStack>
  );
}
