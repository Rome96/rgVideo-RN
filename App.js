import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import SuggestionList from './src/components/suggestion/SuggestionList';

export default class App extends React.Component {
  render() {
    return (
        <Home>
          <Header/>
          <Text>Buscador</Text>
          <Text>Categoria</Text>
          <SuggestionList/>
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
