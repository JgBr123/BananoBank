import React, {Component} from 'react';
import {View, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home' 
import Lock from './Lock' 

const Stack = createStackNavigator();

export default class App extends Component {
	render () {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Lock' headerMode='null' screenOptions={{
					cardOverlay: () => (
						<View
						  style={{
						  flex: 1,
						  backgroundColor: '#242424',
						}}
					  />)
				}}>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Lock' component={Lock} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}