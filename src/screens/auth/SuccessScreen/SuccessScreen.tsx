import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Text, Icon, Screen} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
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
