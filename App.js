import React, {Component} from 'react';
import {View,Text,Image,StatusBar} from 'react-native';
import styles from './styles'

export default class App extends Component {
	render () {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor='#242424' barStyle="white-content" />

				<Image style={styles.lock} source={require('./icons/lock.png')}/>
				<Text style={{color: 'gold', fontSize: 40, marginTop: 5, fontWeight: 'bold'}}>Locked</Text>

			</View>
		)
	}
}