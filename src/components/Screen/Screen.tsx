/* eslint-disable react/react-in-jsx-scope */

import {KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Icon, Text, Box} from '@components';
import {useAppTheme} from '@hooks';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
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
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
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
