/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text bold={true} italic={true} preset="headingLarge">Luiz</Text>
    </SafeAreaView>
  );
}

export default App;
