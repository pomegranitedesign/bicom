import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Testimonies = (props) => {
	const [ isStoryVisible, setIsStoryVisible ] = useState(false)
	return (
		<View>
			<Text>Testimonies</Text>
			<TouchableOpacity onPress={() => setIsStoryVisible(true)}>
				<Text>Click me</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({})

export default Testimonies
