import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };

  const handleLogin = () => {
    if (validateEmail()) {
      // Implemente a lógica de autenticação aqui
    }
  };

  const handleForgotPassword = () => {
    // Implemente a lógica para redefinir a senha aqui
  };

  const handleCreateAccount = () => {
    // Implemente a lógica para criar uma nova conta aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Satisfying.you</Text>
        <Icon name="mood" size={60} color="white" />
      </View>
      <View style={styles.txtInput}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={[styles.input, !isEmailValid && styles.inputError]}
        />
        {!isEmailValid && (
          <Text style={styles.errorText}>Por favor, insira um email válido.</Text>
        )}
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Entrar"
            onPress={handleLogin}
            color="#37BD6D"
          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="Criar conta"
            onPress={handleCreateAccount}
            color="#419ED7"
          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            title="Esqueci a senha"
            onPress={handleForgotPassword}
            color="#B5C7D1"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginRight: 10, 
    fontFamily: 'AveriaLibre-Bold',
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#3F92C5',
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: '#FD7979',
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 25,
  },
  buttonContainer2: {
    marginBottom: 10,
  },
});

export default LoginScreen;
