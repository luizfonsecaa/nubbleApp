import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
  });
  function submitForm({email}: ForgotPasswordSchema) {
    console.log(email);
    // Todo enviar email para o usuário
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
      <FormTextInput
        control={control}
        name="email"
        autoCapitalize="none"
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />
      <Button
        disable={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        mt="s48"
        title="Recuperar senha"
      />
    </Screen>
  );
}
