/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Luiz
          </Text>
          <Button preset="primary" title="Primary" marginBottom="s16" />
          <Button preset="primary" disable title="Primary" marginBottom="s16" />
          <Button preset="outline" title="Outline" marginBottom="s16" />
          <Button
            preset="outline"
            loading
            disable
            title="Outline"
            marginBottom="s16"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
