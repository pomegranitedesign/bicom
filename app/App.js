import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

const App = () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>Hello World from dev branch</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default App
