import React from 'react';

import {Button, Text, Icon, Screen} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button mt="s40" onPress={navigation.goBack} title="Voltar ao inicio" />
    </Screen>
  );
}
