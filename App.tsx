/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Luiz
          </Text>

          <Icon name="trash" color="carrotSecondary" size={100} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
//Icon component
