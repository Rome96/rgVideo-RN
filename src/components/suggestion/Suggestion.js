import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

function Suggestion (props) {
    console.log('LOS PROPS A SUGGESTION:::', props)
    return (
        <View style={styles.container}>
           <View style={styles.left}>
                <Image
                    style={styles.cover}
                    source={{
                        uri: props.medium_cover_image
                        }}
                />
                <View style={styles.genreContent}>
                    <Text style={styles.genreText}>{props.genres[0]}</Text>
                </View>
            </View>
            <View style={styles.rigth}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
                <Text style={styles.rating}>{props.rating}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    left: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-between'
    },
    rigth: {
        justifyContent: 'space-between',
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain',
        //margin: 3 
    },
    genreContent:{
     backgroundColor: 'black',
     left: 0,
     alignSelf: 'flex-start',
     borderRadius: 5,
     marginTop: 3
    },
    genreText: {
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 7,
        fontSize: 12,
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year:{
        backgroundColor: '#70b124',
        paddingVertical: 3,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 13,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Suggestion