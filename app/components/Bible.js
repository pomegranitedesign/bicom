import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Controls from './Controls'

const Bible = () => {
	return (
		<View>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>The Beginning</Text>
					<Text style={styles.description}>
						1 In the beginning God created the heaven and the earth.
						2 And the earth was without form, and void; and darkness
						was upon the face of the deep. And the Spirit of God
						moved upon the face of the waters.
					</Text>

					<Text style={styles.description}>
						3 And God said, Let there be light: and there was light.
						4 And God saw the light, that it was good: and God
						divided the light from the darkness. 5 And God called
						the light Day, and the darkness he called Night. And the
						evening and the morning were the first day.
					</Text>

					<Text style={styles.description}>
						6 And God said, Let there be a firmament in the midst of
						the waters, and let it divide the waters from the
						waters. 7 And God made the firmament, and divided the
						waters which were under the firmament from the waters
						which were above the firmament: and it was so. 8 And God
						called the firmament Heaven. And the evening and the
						morning were the second day.
					</Text>

					<Text style={styles.description}>
						9 And God said, Let the waters under the heaven be
						gathered together unto one place, and let the dry land
						appear: and it was so. 10 And God called the dry land
						Earth; and the gathering together of the waters called
						he Seas: and God saw that it was good. 11 And God said,
						Let the earth bring forth grass, the herb yielding seed,
						and the fruit tree yielding fruit after his kind, whose
						seed is in itself, upon the earth: and it was so. 12 And
						the earth brought forth grass, and herb yielding seed
						after his kind, and the tree yielding fruit, whose seed
						was in itself, after his kind: and God saw that it was
						good. 13 And the evening and the morning were the third
						day. 14 And God said, Let there be lights in the
						firmament of the heaven to divide the day from the
						night; and let them be for signs, and for seasons, and
						for days, and years: 15 And let them be for lights in
						the firmament of the heaven to give light upon the
						earth: and it was so. 16 And God made two great lights;
						the greater light to rule the day, and the lesser light
						to rule the night: he made the stars also. 17 And God
						set them in the firmament of the heaven to give light
						upon the earth, 18 And to rule over the day and over the
						night, and to divide the light from the darkness: and
						God saw that it was good. 19 And the evening and the
						morning were the fourth day. 20 And God said, Let the
						waters bring forth abundantly the moving creature that
						hath life, and fowl that may fly above the earth in the
						open firmament of heaven.
					</Text>
				</View>
			</ScrollView>
			<Controls />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20
	},

	description: {
		marginBottom: 10,
		fontWeight: '300',
		lineHeight: 20
	}
})

export default Bible
