import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />
      <Box>
        <TextInput
          errorMessage="messagem de erro"
          label="Senha"
          placeholder="Digite sea senha"
          boxProps={{mb: 's10'}}
          RightComponent={<Icon name="eyeOn" color="gray2" size={20} />}
        />
      </Box>
      <Text mt="s10" color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button mt="s12" preset="outline" title="Criar uma conta" />
    </Screen>
  );
}
