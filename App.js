import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import SuggestionList from './src/components/suggestion/container/SuggestionList';
import api from './src/components/api/api';

export default class App extends React.Component {
  state = {
    suggestionListMovies: [],
    loading: true
  }
 async componentDidMount(){
      const movies = await api.getSuggestion(10)
      this.setState({
        suggestionListMovies: movies,
        loading: false
      })
  }

  render() {
    const {suggestionListMovies, loading} = this.state
    return (
        <Home>
          <Header/>
         
          {
            loading ? <View style={styles.container}>
                <ActivityIndicator size='large' color='#ff050' />
            </View>
            :
            <SuggestionList movies={suggestionListMovies} />
          }
         
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
