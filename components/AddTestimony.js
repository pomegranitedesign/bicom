import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import image from '../assets/user.jpg'

// This module requires the user's information such as his image
// assuming we already have the image

const AddTestimony = (props) => {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />

			<View style={styles.infoContainer}>
				<Text>My testimony</Text>
				<Text>Tap to add testimony update</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 10,
		marginLeft: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},

	image: {
		width: 80,
		height: 80,
		borderRadius: 100
	},

	infoContainer: {
		marginLeft: 10
	}
})

export default AddTestimony
