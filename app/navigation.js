import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboard from './screens/Onboard'
import Registration from './screens/Registration'
import Main from './screens/Main'
import HeaderRight from './components/HeaderRight'

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
				headerRight: HeaderRight,
				headerStyle: { backgroundColor: '#084480' },
				headerTitleStyle: {
					color: 'white',
					fontWeight: '400'
				}
			}}
		>
			<MainStack.Screen name="Bible Companion" component={Main} />
		</MainStack.Navigator>
	)
}
