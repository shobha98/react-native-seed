import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import {string} from '../../Config/string';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{string.login}</Text>
      <Text style={styles.subHeading}>{string.login_account}</Text>

      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity style={styles.forgotText}>
          <Text style={styles.blueText}>{string.forgot_password}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{string.login.toUpperCase()}</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <Text>{string.dont_have_account}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.blueText}>{string.register}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
