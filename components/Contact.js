import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, StyleSheet, Image } from 'react-native'

const Contact = ({ contact }) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Image style={styles.image} source={contact.image} />
				<View style={styles.info}>
					<Text style={styles.name}>{contact.name}</Text>
					<Text style={styles.bio}>{contact.bio}</Text>
				</View>
			</View>

			<View style={styles.right}>
				<Feather
					style={{ marginRight: 20 }}
					name="more-vertical"
					size={24}
					color="black"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white'
	},

	left: {
		margin: 20,
		flexDirection: 'row'
	},

	info: {
		paddingTop: 5,
		paddingBottom: 5,
		justifyContent: 'space-between',
		marginLeft: 10
	},

	name: {},

	bio: {},

	image: {
		height: 60,
		width: 60,
		borderRadius: 100
	}
})

export default Contact
