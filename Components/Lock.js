import React from 'react';
import {View,Text,Image,StatusBar,TouchableOpacity,StyleSheet} from 'react-native';

export default function Lock ({navigation}) {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#242424' barStyle="white-content" />

			<Image style={styles.lock} source={require('../icons/lock.png')}/>
			<Text style={styles.textLocked}>Locked</Text>

			<TouchableOpacity style={styles.unlockButton} activeOpacity={0.6}  onPress={() => {navigation.navigate('Home')}}>
				<Text style={styles.textUnlockButton}>Unlock</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
        alignItems: 'center',
    },
    lock: {
        marginTop: 40,
        width: 100,
        height: 100
    },
    unlockButton: {
        marginTop: 480,
        width: 300,
        height: 65,
        backgroundColor: 'gold',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textUnlockButton:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textLocked:{
        color: 'gold',
        fontSize: 40,
        marginTop: 5, 
        fontWeight: 'bold'
    }
})