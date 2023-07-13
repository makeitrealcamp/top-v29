import {View, Text, Button, TextInput, Switch, KeyboardAvoidingView, Platform} from 'react-native';
import { useState } from 'react'

import styles from './Form.styles';

const Form = () => {
  const [form, setForm] = useState({})
  const [showPassword, setShowPassword] = useState(false);
  const toggleSwitch = () => setShowPassword(previousState => !previousState);

  const handlePress = () => {
    console.log(form)
  }

  const handleChangeText = (input, value) => {
    setForm({...form, [input]: value})
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* <Text style={styles.text}>{count}</Text> */}
      <TextInput
        style={styles.textInput}
        placeholder='Type here to email'
        onChangeText={(text)=> {handleChangeText('email', text)}}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Type here to password'
        onChangeText={(text)=> {handleChangeText('password', text)}}
        autoCapitalize='none'
        secureTextEntry={!showPassword}
      />
      <Switch
        value={showPassword}
        onValueChange={toggleSwitch}
      />
      <Button
        title='Press me'
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
};

export default Form;
