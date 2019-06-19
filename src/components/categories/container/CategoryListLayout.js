import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    View,
    Text
} from 'react-native'

function CategoryListLayout(props) {
    return (
        <ImageBackground
            source={require('../../../../assets/background.png')}
            style={styles.container}
        >
            <Text style={styles.titleStyle}>{props.title}</Text>
            {props.children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    titleStyle: {
        fontSize: 20,
        color: '#4c4c4c',
        marginBottom: 10,
        fontWeight: 'bold',
        paddingVertical: 6
    }
})

export default CategoryListLayout