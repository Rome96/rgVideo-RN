import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

function CategoryListLayout (props) {
    return(
        <View  style={styles.container}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleStyle: {
        fontSize: 20,
        color: '#4c4c4c',
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
        paddingVertical: 6
    }
})

export default CategoryListLayout