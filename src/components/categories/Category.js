import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Platform
} from 'react-native'

function Category(props){
  return(
    <ImageBackground
      style={styles.wrapper}
      source={{
        uri: props.background_image
      }}
    >
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 240,
    height: 110,
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  genre: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset:{
      width: 2,
      height: 2
    },
    ...Platform.select({
      ios: {
        textShadowRadius:  0
      },
      android: {
        textShadowRadius:  1
      },
    }),
  }
})

export default Category