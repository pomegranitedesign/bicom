import React from 'react'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import ContextMenu from './ContextMenu'

const HeaderRight = () => {
	return (
		<View style={styles.container}>
			<Feather
				style={{ ...styles.icon, marginRight: 15 }}
				name="search"
			/>
			<ContextMenu />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginRight: 15,
		flexDirection: 'row'
	},

	icon: {
		fontSize: 20,
		color: 'white'
	}
})

export default HeaderRight
