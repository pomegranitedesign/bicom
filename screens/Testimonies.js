import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Testimony, AddTestimony } from '../components'
import testImage from '../assets/user.jpg'

const _test = [
	{
		id: 1,
		name: 'John Doe',
		body: 'Hello World',
		image: testImage,
		posted: '57 minutes ago'
	},
	{
		id: 2,
		name: 'John Doe',
		body: 'of testimonies',
		image: testImage,
		posted: 'Just now'
	},
	{
		id: 3,
		name: 'John Doe',
		body: 'and coding',
		image: testImage,
		posted: '3 days ago'
	}
]

const Label = ({ text }) => (
	<View style={styles.label}>
		<Text style={{ color: 'white', fontWeight: 'bold' }}>{text}</Text>
	</View>
)

const Testimonies = (props) => {
	const [ isStoryVisible, setIsStoryVisible ] = useState(false)

	return (
		<ScrollView style={styles.container}>
			<AddTestimony />

			<Label text="Recent testimonies" />
			{_test.map((data) => <Testimony data={data} />)}

			<Label text="Viewed testimonies" />
			{_test.slice(0, 2).map((data) => <Testimony data={data} />)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {},

	label: {
		backgroundColor: '#006dd9',
		padding: 8,
		marginTop: 10,
		marginBottom: 10
	}
})

export default Testimonies
