import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from 'react-native'
import Empty from '../../../utils/Empty'
import Separator from '../../../utils/HorizontalSeparator'
import Suggestion from '../../suggestion/Suggestion';
import Layout from './CategoryListLayout'


class CategoryList extends Component {
  _keyExtractor = item => String(item.id)
  _renderEmpty = () => <Empty text='No hay sugerencias disponibles...' />
  _itemSeparator = () => <Separator/>
  _renderItem = ({ item }) => {
      return (
          <Suggestion {...item} />
      )
  }
  render() {
    return (
       <Layout
          title='Categorias'
       >
          <FlatList
          data={this.props.movies}
          ListEmptyComponent={() => this._renderEmpty()}
          // ListEmptyComponent = {() => <Text>No Hay sugerencias disponibles</Text>}
          ItemSeparatorComponent={() => this._itemSeparator()}
          renderItem={(item) => this._renderItem(item)}
          keyExtractor={this._keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
       </Layout>
    )
  }
}

export default CategoryList