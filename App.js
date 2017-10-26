import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAg2QriXel0gYxRL6G-H7w0ZU-p0I1iOVM',
      authDomain: 'manager-9ea1c.firebaseapp.com',
      databaseURL: 'https://manager-9ea1c.firebaseio.com',
      projectId: 'manager-9ea1c',
      storageBucket: 'manager-9ea1c.appspot.com',
      messagingSenderId: '811670235424',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
