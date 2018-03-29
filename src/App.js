import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAhHN3opAvVW78Irk24jZcO20S1vh8y25w',
      authDomain: 'auth-app-11.firebaseapp.com',
      databaseURL: 'https://auth-app-11.firebaseio.com',
      projectId: 'auth-app-11',
      storageBucket: 'auth-app-11.appspot.com',
      messagingSenderId: '961866699972'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
