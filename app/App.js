import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { MainNavigation } from './navigation'
import { StatusBar } from 'expo-status-bar'
import { MenuProvider } from 'react-native-popup-menu'

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<MenuProvider>
				<NavigationContainer>
					<MainNavigation />
				</NavigationContainer>
			</MenuProvider>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})

export default App
