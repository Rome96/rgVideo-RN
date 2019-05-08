import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class Home extends Component {
  render(){
    return this.props.children
  }
}

export default Home
