import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native'
import SeparatorLine from './SeparatorLine'

const UserInfo = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>User Info</Text>

			<View style={styles.field}>
				<Text style={styles.label}>Registered Number</Text>
				<Text style={styles.value}>+1 647 554 9993</Text>
			</View>

			<SeparatorLine />

			<View style={styles.field}>
				<Text style={styles.label}>Full Name</Text>

				<View style={styles.row}>
					<Text style={styles.value}>Dmitriy Shin</Text>
					<FontAwesome name="pencil" size={24} color="black" />
				</View>
			</View>

			<SeparatorLine />

			<View style={styles.field}>
				<Text style={styles.label}>Username</Text>

				<View style={styles.row}>
					<Text style={styles.value}>@dmitriyshin</Text>
					<FontAwesome name="pencil" size={24} color="black" />
				</View>
			</View>

			<SeparatorLine />

			<View style={styles.field}>
				<Text style={styles.label}>Bio</Text>

				<View style={styles.row}>
					<Text style={styles.value}>I am a good person</Text>
					<FontAwesome name="pencil" size={24} color="black" />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20
	},

	field: {},

	label: {
		fontWeight: '200'
	},

	value: {
		marginTop: 5,
		fontWeight: 'bold'
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})

export default UserInfo
