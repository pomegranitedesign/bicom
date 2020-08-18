import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './Feed'
import Contacts from './Contacts'

const Tab = createBottomTabNavigator()
const Social = () => {
	return (
		<Tab.Navigator
			initialRouteName="Feed"
			activeColor="#000000"
			inactiveColor="#000000"
			tabBarOptions={{
				activeTintColor: 'black'
			}}
		>
			<Tab.Screen name="Feed" component={Feed} />
			<Tab.Screen name="Contacts" component={Contacts} />
		</Tab.Navigator>
	)
}

export default Social
