import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ScrollView
} from 'react-native'
import Layout from './SuggestionListLayout'
import Empty from '../../../utils/Empty'
import Separator from '../../../utils/VerticalSeparator'
import Suggestion from '../Suggestion';

class SuggestionList extends Component {

    _keyExtractor = item => String(item.id)
    _renderEmpty = () => <Empty text='No hay sugerencias disponibles...' />
    _itemSeparator = () => <Separator color='#95adbe' />
    _renderItem = ({ item }) => {
        return (
            <Suggestion {...item} />
        )
    }
    render() {
        return (
            <Layout
                title='Recomendado para tí'
            >
                <ScrollView>
                    <FlatList
                        data={this.props.movies}
                        ListEmptyComponent={() => this._renderEmpty()}
                        // ListEmptyComponent = {() => <Text>No Hay sugerencias disponibles</Text>}
                        ItemSeparatorComponent={() => this._itemSeparator()}
                        renderItem={(item) => this._renderItem(item)}
                        keyExtractor={this._keyExtractor}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default SuggestionList