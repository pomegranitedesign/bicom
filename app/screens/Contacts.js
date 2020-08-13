import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Contact } from '../components'
import userImage from '../../assets/user.jpg'

const _testContacts = [
	{
		id: 1,
		name: 'John Doe',
		bio: 'lorem ipsum dolor sit amet...',
		image: userImage
	},
	{
		id: 2,
		name: 'Dmitriy Shin',
		bio: 'lorem ipsum dolor sit amet...',
		image: userImage
	},
	{
		id: 3,
		name: 'John Min',
		bio: 'lorem ipsum dolor sit amet...',
		image: userImage
	},
	{
		id: 4,
		name: 'Alex Chen',
		bio: 'lorem ipsum dolor sit amet...',
		image: userImage
	},
	{
		id: 5,
		name: 'Andrew Schmidt',
		bio: 'lorem ipsum dolor sit amet...',
		image: userImage
	},
	{
		id: 6,
		name: 'Wisk Me',
		bio: 'lorem ipsum dolor sit amet...',
		image: userImage
	}
]

const Contacts = (props) => {
	return (
		<View style={{ backgroundColor: 'white' }}>
			<FlatList
				data={_testContacts}
				renderItem={(contact) => <Contact contact={contact.item} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})

export default Contacts
