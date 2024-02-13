/* eslint-disable react/react-in-jsx-scope */

import {KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Icon, Text, Box, BoxProps} from '@components';
import {useAppTheme} from '@hooks';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacity onPress={navigation.goBack}>
              <Box mb="s24" flexDirection="row">
                <Icon name="arrowLeft" color="primary" />
                <Text preset="paragraphMedium" semiBold ml="s8">
                  Voltar
                </Text>
              </Box>
            </TouchableOpacity>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
