import {Card, Divider, Heading, Text, VStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import UIInput from '../../components/UIInput';
import UIButton from '../../components/UIButton';
import {Alert} from 'react-native';
import UILinkButton from '../../components/UILinkButton';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../redux/hooks';
import {loginUser} from '../../redux/slices/mainSlice';

export default function Login() {
  const [email, setEmail] = useState('ejemplo@gmail.com');
  const [password, setPassword] = useState('123456');

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function forgetPasswordHandler() {
    //@ts-ignore
    navigation.navigate('forgotPassword');
  }

  function createAccountHandler() {
    //@ts-ignore
    navigation.navigate('createAccount');
  }

  function loginHandler() {
    if (!email || !password) {
      Alert.alert('Porfavor ingrese sus datos');
      return;
    }

    const correctEmail = 'ejemplo@gmail.com';
    const correctPassword = '123456';

    if (email === correctEmail && password === correctPassword) {
      dispatch(loginUser());
      Alert.alert('Usuario Ingresado Correctamente');
      return;
    }

    if (email !== correctEmail || password !== correctPassword) {
      Alert.alert('Datos Incorrectos');
      return;
    }

    console.log(email);
    console.log(password);
  }

  return (
    <VStack flex={1} justifyContent="center" bg="$secondary0">
      <Card
        size="lg"
        variant="elevated"
        m="$3"
        marginHorizontal={'$6'}
        borderRadius={'$lg'}>
        <Heading mb="$10" size="md" ml={'$1/4'}>
          Expense Manager
        </Heading>
        <VStack ml={'$1.5'}>
          <Heading fontSize={'$md'}>Bienvenido</Heading>
          <Text mb={'$10'}>Ingresa tus credenciales</Text>
        </VStack>
        <VStack w={'$full'} px={25} gap={15}>
          <UIInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            type="text"
            autoCapitalize="none"
          />
          <UIInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            type="password"
          />
          <UILinkButton
            title="Olvide mi contraseña"
            onPress={forgetPasswordHandler}
            color="blue"
          />
          <UIButton title="Login" onPress={loginHandler} />
          <Divider />
          <VStack alignItems="flex-start">
            <UILinkButton
              title="Crear Cuenta"
              onPress={createAccountHandler}
              color="gray"
            />
          </VStack>
        </VStack>
      </Card>
    </VStack>
  );
}
