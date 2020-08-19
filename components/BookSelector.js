import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import { Picker } from '@react-native-community/picker'

const isIOS = Platform.OS === 'ios'
const BookSelector = ({ handleBibleChanges, bibleState }) => {
	return isIOS ? (
		<ModalSelector
			data={bibleState.currentBible.books}
			keyExtractor={(item) => item.id}
			labelExtractor={(item) => item.name}
			onChange={(selectedBook) =>
				handleBibleChanges(selectedBook, 'book')}
		>
			<Text>{bibleState.currentBible.currentBook.name}</Text>
		</ModalSelector>
	) : (
		<Picker
			style={styles.picker}
			selectedValue={bibleState.currentBible.bible.abbreviationLocal}
		>
			{bibleState.currentBible.chapters.map((chapter) => (
				<Picker.Item
					key={chapter.id}
					label={chapter.reference}
					value={chapter.id}
				/>
			))}
		</Picker>
	)
}

const styles = StyleSheet.create({})

export default BookSelector
