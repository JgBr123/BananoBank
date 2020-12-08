import React, {Component} from 'react';
import {View,Text,Image,StatusBar,TouchableOpacity,StyleSheet} from 'react-native';

export default function Home ({navigation}) {
    React.useEffect(() => navigation.addListener('beforeRemove', (e) => {e.preventDefault()}))

    return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#242424' barStyle="white-content" />

			<Text style={styles.text}>Home</Text>
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        color: 'gold'
    }
})