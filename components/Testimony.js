import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Testimony = ({ data }) => {
	return (
		<View style={styles.container}>
			<Image source={data.image} style={styles.image} />

			<View style={styles.infoContainer}>
				<Text style={styles.name}>{data.name}</Text>
				<Text style={styles.posted}>{data.posted}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},

	image: {
		width: 80,
		height: 80,
		borderRadius: 100
	},

	infoContainer: {
		marginLeft: 10
	},

	name: {},

	posted: {}
})

export default Testimony
