import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger
} from 'react-native-popup-menu'

const ContextMenu = () => {
	const navigation = useNavigation()
	return (
		<Menu>
			<MenuTrigger
				text={<Feather style={styles.icon} name="more-vertical" />}
			/>
			<MenuOptions>
				<MenuOption
					text="Profile"
					onSelect={() => navigation.navigate('Profile')}
				/>

				<MenuOption
					text="Testimonies"
					onSelect={() => navigation.navigate('Testimonies')}
				/>

				<MenuOption
					text="Bookmarks"
					onSelect={() => navigation.navigate('Bookmarks')}
				/>

				<MenuOption
					text="Settings"
					onSelect={() => navigation.navigate('Settings')}
				/>
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
