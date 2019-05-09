import React from 'react'
import {
    SafeAreaView,
    Platform,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import { Constants } from 'expo'

const HEIGHT = Platform.OS === 'ios' ? 50 : 56

function Header(props) {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.statusBar}></View>
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logoStyle}
                    />
                    <View>{props.children}</View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: '#fff3a3'
    },
    container: {
        height: HEIGHT,
        width: '100%',
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff3a3',
        padding: 10
    },
    logoStyle:{
        width: 50,
        height: 50,
        resizeMode: 'contain'

        
    }
})

export default Header