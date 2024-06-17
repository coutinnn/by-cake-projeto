import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './components/home';

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logar = async () => {
    const storedLogin = await AsyncStorage.getItem('login');
    const storedSenha = await AsyncStorage.getItem('senha');

    if (login !== storedLogin) {
      setErrorMessage('Usuário não encontrado');
    } else if (senha !== storedSenha) {
      setErrorMessage('Senha inválida');
    } else {
      setErrorMessage('');
      Alert.alert('Sucesso');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button title="Entrar" onPress={logar} />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  const [newLogin, setNewLogin] = useState('');
  const [newSenha, setNewSenha] = useState('');

  const registrar = async () => {
    if (newLogin && newSenha) {
      await AsyncStorage.setItem('login', newLogin);
      await AsyncStorage.setItem('senha', newSenha);
      Alert.alert('Registro realizado com sucesso');
      navigation.navigate('Login');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Registrar</Text>
        <TextInput
          style={styles.input}
          placeholder="Novo Login"
          value={newLogin}
          onChangeText={setNewLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          secureTextEntry
          value={newSenha}
          onChangeText={setNewSenha}
        />
        <Button title="Registrar" onPress={registrar} />
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo à loja</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 40,
    borderRadius: 25,
    width: 300,
  },
  header: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  registerText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});