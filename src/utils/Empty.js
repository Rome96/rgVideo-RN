import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

function Empty (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 15
    }
})

export default Empty