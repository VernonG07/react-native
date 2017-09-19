import { View, Text, TextInput } from 'react-native';
import React from 'react';

const Input = ({label, value, onChangeText, placeholder}) => {

    const { inputStyle, labelStyle, containerStyle, secureTextEntry } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
  inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
  },
  labelStlye: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
  },
  containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
  }
};

export { Input };