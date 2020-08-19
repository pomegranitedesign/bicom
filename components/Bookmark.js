import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Bookmark = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.topLeft}>
					<Text style={styles.title}>Chapter Name</Text>
					<Text style={{ ...styles.title, marginLeft: 10 }}>
						1 - 1.3
					</Text>
				</View>

				<View style={styles.topRight}>
					<Text style={styles.timeText}>8:02 pm</Text>
				</View>
			</View>

			<View style={styles.bottom}>
				<Text style={styles.verseText}>
					The Genealogy of Jesus Christ. A record of the genealogy of
					Jesus Christ the son of David, the son of Abraham;
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},

	topLeft: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	topRight: {},

	bottom: {},

	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},

	timeText: {
		fontWeight: '300',
		fontStyle: 'italic'
	},

	verseText: {
		fontSize: 16
	}
})

export default Bookmark
