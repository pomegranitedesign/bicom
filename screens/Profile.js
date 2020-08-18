import React, { useState } from 'react'
import { View, StyleSheet, Platform, ScrollView } from 'react-native'
import { ProfileImage, UserInfo } from '../components'

const Profile = (props) => {
	const [ profileImageURL, setProfileImageURL ] = useState('')

	const RespectiveView = Platform.OS === 'ios' ? View : ScrollView
	return (
		<View style={styles.container}>
			<View style={styles.profileImageContainer}>
				<ProfileImage
					profileImageURL={profileImageURL}
					setProfileImageURL={setProfileImageURL}
				/>
			</View>
			<RespectiveView style={styles.userInfoContainer}>
				<UserInfo />
			</RespectiveView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	profileImageContainer: {
		alignItems: 'center',
		marginTop: 100
	},

	userInfoContainer: {
		marginTop: 100,
		padding: 20
	}
})

export default Profile
