import React from 'react'
import { Image, SafeAreaView, StyleSheet, AsyncStorage } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const Onboard = (props) => {
	// Save the user's onboarding status in order to stop showing it every time
	const completeOnBoarding = async () => {
		await AsyncStorage.setItem(
			'@@Bicom/hasOnboarded',
			JSON.stringify({ hasOnboarded: true })
		)
		props.navigation.navigate('Registration')
	}
	return (
		<SafeAreaView style={styles.container}>
			<Onboarding
				onDone={completeOnBoarding}
				onSkip={completeOnBoarding}
				pages={[
					{
						backgroundColor: '#fff',
						image: (
							<Image
								style={{ height: 300, width: 300 }}
								source={require('../assets/firstImage.png')}
							/>
						),
						title: 'GOD LOVES YOU',
						subtitle:
							'Lorem ipsum dolor sit amet, te vero persius alterium vel, vis an quis modo. Vel rebum singulis cu. Ne enim sonet invenire pri, sit an facer possim definitiones. Duis brute usu ei.'
					}
				]}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default Onboard
