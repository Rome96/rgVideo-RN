import React, { Component } from 'react';
import { 
  StyleSheet,
  ActivityIndicator
 } from 'react-native'
import { Video } from 'expo';
import Layout from '../Layout'

class Player extends Component {
  render() {
    return (
      <Layout
        video={
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode='contain'
            shouldPlay
            isLooping
            useNativeControls={true}
            style={styles.video}
          />
        }
        loader={
          <ActivityIndicator
           color='red'
           size="large"
           />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  }
})

export default Player

