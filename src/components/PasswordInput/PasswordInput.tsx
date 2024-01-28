import React, {useState} from 'react';

import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    console.log('toggleSecureTextEntry');
    setIsSecureTextEntry(value => !value);
  }
  console.log('PasswordInput');
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
          color="gray2"
          size={20}
        />
      }
    />
  );
}
