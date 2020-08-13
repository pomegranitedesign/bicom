import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View, Text, StyleSheet } from 'react-native'
import Bible from './Bible'
import Social from './Social'

const Tab = createMaterialTopTabNavigator()

const Main = (props) => {
	return (
		<View style={styles.container}>
			<Tab.Navigator
				tabBarOptions={{
					style: {
						backgroundColor: '#006dd9'
					},
					inactiveTintColor: 'white',
					activeTintColor: 'white',
					indicatorStyle: {
						backgroundColor: 'white'
					}
				}}
			>
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
