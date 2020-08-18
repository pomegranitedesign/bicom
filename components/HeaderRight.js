import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity } from 'react-native'
import ContextMenu from './ContextMenu'

const HeaderRight = () => {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<Feather
					style={{ ...styles.icon, marginRight: 15 }}
					name="search"
				/>
			</TouchableOpacity>

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
