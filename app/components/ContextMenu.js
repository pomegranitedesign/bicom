import React from 'react'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger
} from 'react-native-popup-menu'

const ContextMenu = () => {
	return (
		<Menu>
			<MenuTrigger
				text={<Feather style={styles.icon} name="more-vertical" />}
			/>
			<MenuOptions>
				<MenuOption text="Profile" />
				<MenuOption text="Testimonies" />
				<MenuOption text="Bookmarks" />
				<MenuOption text="Settings" />
			</MenuOptions>
		</Menu>
	)
}

const styles = StyleSheet.create({
	icon: {
		fontSize: 20,
		color: 'white'
	}
})

export default ContextMenu
