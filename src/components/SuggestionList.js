import React, {Component} from 'react'
import {
    StyleSheet,
    FlatList,
    View,
    Text
} from 'react-native'
import Layout from '../container/SuggestionListLayout'
import Empty from '../components/Empty'
import Separator from '../components/VerticalSeparator'


const list = [
    {
        title: 'Avengers',
        key: 1
    },
    {
        title: 'Super Man',
        key: 2
    },
    {
        title: 'Hullk',
        key: 3
    }
]
class Suggestion extends Component {

    _renderItem(item) {
        return(
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }
    _keyExtractor = (item) => String(item.key)

    _renderEmpty = () => <Empty text='No hay sugerencias disponibles...' />

    _itemSeparator = () => <Separator color='red' />
   

    render(){
        return(
           <Layout
                title = 'Recomendado para tí'
           >
                <FlatList
                data={list}
                ListEmptyComponent = {() => this._renderEmpty()}
              // ListEmptyComponent = {() => <Text>No Hay sugerencias disponibles</Text>}
                ItemSeparatorComponent = {() => this._itemSeparator()}
                renderItem={({ item }) => this._renderItem(item) }
                keyExtractor={this._keyExtractor}
            />
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

export default Suggestion