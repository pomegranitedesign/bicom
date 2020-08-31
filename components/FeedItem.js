import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import testImage from '../assets/user.jpg'

const FeedItem = ({ name, read, text, time }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={testImage} />
			</View>

			<View style={styles.infoContainer}>
				<View style={styles.infoContainerTop}>
					<Text style={styles.name}>
						{name} read {read}
					</Text>
					<Text style={styles.time}>{time}</Text>
				</View>

				<Text style={styles.feedText}>{text}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10
	},

	imageContainer: {},

	image: {
		borderRadius: 100,
		height: 70,
		width: 70
	},

	infoContainer: {
		marginLeft: 10,
		flex: 1
	},

	infoContainerTop: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	name: {
		fontWeight: 'bold'
	},

	time: {
		fontWeight: 'bold'
	},

	feedText: {
		marginTop: 5,
		fontSize: 14
	}
})

export default FeedItem
