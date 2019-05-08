import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default class App extends React.Component {
  render() {
    return (
        <Home>
          <Text>Header</Text>
          <Text>Buscador</Text>
          <Text>Categoria</Text>
          <Text>Sugerencias</Text>
        </Home>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
