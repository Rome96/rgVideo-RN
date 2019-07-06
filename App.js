import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import SuggestionList from './src/components/suggestion/container/SuggestionList';
import CategoryList from './src/components/categories/container/CategoryList';
import api from './src/components/api/api';
import Player from './src/components/player/container/Player';

export default class App extends React.Component {
  state = {
    suggestionListMovies: [],
    categoriesList: [],
    loading: true
  }
  async componentDidMount() {
    const movies = await api.getSuggestion(10)
    const categories = await api.getMovies()
    this.setState({
      suggestionListMovies: movies,
      categoriesList: categories,
      loading: false
    })
  }

  render() {
    const { suggestionListMovies, categoriesList, loading } = this.state
    return (
      <Home>
        <Header />
        <Player/>
        <ScrollView>
          {
            loading ? <View style={styles.container}>
              <ActivityIndicator size='large' color='#ff050' />
            </View>
              :
              <React.Fragment>
                <CategoryList movies={categoriesList} />
                <SuggestionList movies={suggestionListMovies} />
              </React.Fragment>
          }
        </ScrollView>

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
