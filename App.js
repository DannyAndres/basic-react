import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

//paquetes externos
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

//vistas
import Home from './resources/views/home';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class App extends React.Component {

  constructor(props) {
    super(props);
    const firebaseConfig = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
    }
    //firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Home" component={Home} hideNavBar/>
        </Stack>
      </Router>
    );
  }
}