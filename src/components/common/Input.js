import React from 'react';
import { View, Text, TextInput } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 6,
  },
  inputStyle: {
    fontSize: 18,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    flex: 2,
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center',
  },
};

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, textStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

export default Input;
