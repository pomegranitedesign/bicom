import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, StyleSheet } from 'react-native'
import Bible from '../components/Bible'
import Social from '../components/Social'

const Tab = createMaterialTopTabNavigator()

const Main = (props) => {
	return (
		<View style={styles.container}>
			<Tab.Navigator>
				<Tab.Screen name="Bible" component={Bible} />
				<Tab.Screen name="Social" component={Social} />
			</Tab.Navigator>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		color: 'black',
		backgroundColor: 'red',
		flex: 1
	}
})

export default Main
