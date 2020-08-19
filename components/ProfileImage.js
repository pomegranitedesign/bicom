import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

const ProfileImage = ({ profileImageURL, setProfileImageURL }) => {
	useEffect(
		() => {
			_getPermissionsAsync()
		},
		[ _getPermissionsAsync ]
	)

	// Get permissions to take pictures
	const _getPermissionsAsync = async () => {
		if (Platform.OS === 'ios') {
			const { status } = await Permissions.askAsync(
				Permissions.CAMERA_ROLL
			)
			if (status !== 'granted') alert('Unable to take picture...')
		}
	}

	const _pickImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [ 4, 3 ],
				quality: 1
			})

			if (!result.cancelled) await setProfileImageURL(result.uri)
			else alert('Operation cancelled')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: profileImageURL }} />
			<View
				style={{
					borderRadius: 100,
					overflow: 'hidden'
				}}
			>
				<Entypo
					style={styles.icon}
					onPress={_pickImage}
					name="camera"
					size={36}
					color="white"
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	},

	image: {
		width: 170,
		height: 170,
		borderColor: '#084480',
		borderRadius: 100,
		borderWidth: 1,
		marginRight: -60
	},

	icon: {
		backgroundColor: '#084480',
		padding: 10,
		borderRadius: 100
	}
})

export default ProfileImage
