import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetnavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    //Todo enviar email para o usuário
    reset({
      title: 'Enviamos as instruções para o seu email!',
      description:
        'Clique no link que enviamos para o seu email para redefinir sua senha',
      icon: {name: 'messageRound', color: 'primary'},
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-email e enviamos as intruções para redefinição de senha{' '}
      </Text>
      <TextInput
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} mt="s48" title="Recuperar senha" />
    </Screen>
  );
}
