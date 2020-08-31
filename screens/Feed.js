import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { FeedItem } from '../components'

const Feed = (props) => {
	return (
		<ScrollView style={styles.container}>
			<FeedItem
				name="John Doe"
				read="Mark 3:4"
				text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Itaque, voluptate minima deleniti doloremque beatae omnis
					debitis inventore voluptas ipsam dolore nulla magni est
					consequuntur vitae ab non nostrum, eius voluptates."
				time="7 min ago"
			/>

			<FeedItem
				name="John Doe"
				read="Mark 3:4"
				text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
				time="20 min ago"
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 10
	}
})

export default Feed
