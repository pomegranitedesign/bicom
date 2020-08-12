import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Picker, PickerIOS } from '@react-native-community/picker'
import ModalSelector from 'react-native-modal-selector'

// Check if the current platform is iOS
const isIOS = Platform.OS === 'ios'

const Controls = () => {
	const [ currentBook, setCurrentBook ] = useState('Genesis')
	const [ currentChapter, setCurrentChapter ] = useState(1)
	const [ currentTranslation, setCurrentTranslation ] = useState('KJV')

	let index = 0
	const _testData = [
		{ key: index++, label: 'Genesis' },
		{ key: index++, label: 'Exodus' },
		{ key: index++, label: 'Leviticus' },
		{ key: index++, label: 'Numbers' }
	]

	const _testData2 = [
		{ key: index++, label: '1' },
		{ key: index++, label: '2' },
		{ key: index++, label: '3' },
		{ key: index++, label: '4' }
	]

	const _testData3 = [
		{ key: index++, label: 'KJV' },
		{ key: index++, label: 'CEB' },
		{ key: index++, label: 'ESV' },
		{ key: index++, label: 'GW' }
	]

	return (
		<View style={styles.container}>
			{isIOS ? (
				<ModalSelector data={_testData} initValue={currentBook}>
					<Text>{currentBook}</Text>
				</ModalSelector>
			) : (
				<Picker style={styles.picker} selectedValue={currentBook}>
					<Picker.Item label="Genesis" value="Genesis" />
					<Picker.Item label="Exodus" value="Exodus" />
					<Picker.Item label="Leviticus" value="Leviticus" />
					<Picker.Item label="Numbers" value="Numbers" />
				</Picker>
			)}

			{isIOS ? (
				<ModalSelector data={_testData2} initValue={currentChapter}>
					<Text>{currentChapter}</Text>
				</ModalSelector>
			) : (
				<Picker style={styles.picker} selectedValue={currentChapter}>
					<Picker.Item label="1" value="1" />
					<Picker.Item label="2" value="2" />
					<Picker.Item label="3" value="3" />
					<Picker.Item label="4" value="4" />
				</Picker>
			)}

			{isIOS ? (
				<ModalSelector data={_testData3} initValue={currentTranslation}>
					<Text>{currentTranslation}</Text>
				</ModalSelector>
			) : (
				<Picker
					style={styles.picker}
					selectedValue={currentTranslation}
				>
					<Picker.Item label="KJV" value="KJV" />
					<Picker.Item label="Common English Bible" value="CEB" />
					<Picker.Item label="English Standard Version" value="ESV" />
					<Picker.Item label="GOD'S WORD Translation" value="GW" />
				</Picker>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		padding: isIOS ? 30 : 0,
		backgroundColor: 'white'
	},

	picker: {
		flex: 1
	}
})

export default Controls
