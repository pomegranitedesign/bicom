import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { MenuProvider } from 'react-native-popup-menu'
import { MainNavigation } from './navigation'
import rootReducer from './store/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => store.getState())

const App = () => {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<StatusBar hidden />
				<MenuProvider>
					<NavigationContainer>
						<MainNavigation />
					</NavigationContainer>
				</MenuProvider>
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})

export default App
