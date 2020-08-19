import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Bookmark, SeparatorLine } from '../components'

const Bookmarks = (props) => {
	return (
		<View style={styles.container}>
			<Bookmark />
			<SeparatorLine />
			<Bookmark />
			<SeparatorLine />
			<Bookmark />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default Bookmarks
