import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
	Main,
	Onboard,
	Registration,
	Profile,
	Testimonies,
	Settings,
	Bookmarks,
	Search
} from './screens'
import { HeaderRight } from './components'

const LoginStack = createStackNavigator()
export const LoginNavigation = () => {
	return (
		<LoginStack.Navigator>
			<LoginStack.Screen name="Onboard" component={Onboard} />
			<LoginStack.Screen name="Registration" component={Registration} />
		</LoginStack.Navigator>
	)
}

const MainStack = createStackNavigator()
export const MainNavigation = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerRight: () => <HeaderRight />,
				headerStyle: { backgroundColor: '#084480' },
				headerTitleStyle: {
					color: 'white',
					fontWeight: '400'
				}
			}}
		>
			<MainStack.Screen name="Bible Companion" component={Main} />
			<MainStack.Screen name="Profile" component={Profile} />
			<MainStack.Screen name="Testimonies" component={Testimonies} />
			<MainStack.Screen name="Bookmarks" component={Bookmarks} />
			<MainStack.Screen name="Settings" component={Settings} />
			<MainStack.Screen name="Search" component={Search} />
		</MainStack.Navigator>
	)
}
