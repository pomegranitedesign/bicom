import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'
import ModalSelector from 'react-native-modal-selector'

const isIOS = Platform.OS === 'ios'

const Controls = ({ bibles, currentBible, selectBible, isFetching }) => {
	const [ currentTranslation, setCurrentTranslation ] = useState(
		currentBible.bible.abbreviationLocal
	)

	const handleTranslationChange = (book) => {
		selectBible(book)
		setCurrentTranslation(book.abbreviationLocal)
	}

	console.log(
		'currentBible.bible.abbreviationLocal:',
		currentBible.bible.abbreviationLocal
	)

	if (isFetching)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)

	return (
		<View style={styles.container}>
			{isIOS ? (
				<ModalSelector
					data={currentBible.chapters}
					keyExtractor={(item) => item.id}
					labelExtractor={(item) => item.reference}
				>
					<Text>{currentBible.currentChapter.reference}</Text>
				</ModalSelector>
			) : (
				<Picker
					style={styles.picker}
					selectedValue={currentBible.abbreviationLocal}
				>
					{currentBible.chapters.map((chapter) => (
						<Picker.Item
							key={chapter.id}
							label={chapter.reference}
							value={chapter.id}
						/>
					))}
				</Picker>
			)}

			{isIOS ? (
				<ModalSelector
					data={currentBible.chapters}
					keyExtractor={(item) => item.id}
					labelExtractor={(item) => item.number}
				>
					<Text>{currentBible.currentChapter.number}</Text>
				</ModalSelector>
			) : (
				<Picker
					style={styles.picker}
					selectedValue={currentBible.currentChapter.number}
				>
					{currentBible.chapters.map((chapter) => (
						<Picker.Item
							key={chapter.id}
							label={chapter.number}
							value={chapter.id}
						/>
					))}
				</Picker>
			)}

			{isIOS ? (
				<ModalSelector
					data={bibles}
					keyExtractor={(item) => item.id}
					labelExtractor={(item) => item.name}
					onChange={(selectedBook) =>
						handleTranslationChange(selectedBook)}
				>
					<Text>{currentTranslation}</Text>
				</ModalSelector>
			) : (
				<Picker
					style={styles.picker}
					selectedValue={currentBible.abbreviationLocal}
				>
					{bibles.map((book) => (
						<Picker.Item
							label={book.name}
							value={book.abbreviationLocal}
						/>
					))}
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
