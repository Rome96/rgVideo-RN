import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

function SeparatorVertical (props) {
    return (
        <View style={[
        styles.separator,
            {
                borderTopColor: (props.color) ? props.color : '#eaeaea'
            }
        ]}>
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1
    }
})

export default SeparatorVertical