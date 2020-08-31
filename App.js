import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { MenuProvider } from 'react-native-popup-menu'
import { MainNavigation } from './navigation'
import rootReducer from './store/reducers'
import thunk from 'redux-thunk'

// const persistConfig = {
// 	key: 'business',
// 	storage: AsyncStorage
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(rootReducer, {}, applyMiddleware(thunk))
// const persistedStore = persistStore(store)
// persistedStore.subscribe(() =>
// 	console.log('persistedStore.getState():', persistedStore.getState())
// )

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
