import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'
import ModalSelector from 'react-native-modal-selector'

const isIOS = Platform.OS === 'ios'
const BibleSelector = ({ bibleState, handleBibleChanges }) => {
	return isIOS ? (
		<ModalSelector
			data={bibleState.bibles}
			keyExtractor={(item) => item.id}
			labelExtractor={(item) => item.name}
			onChange={(selectedBible) =>
				handleBibleChanges(selectedBible, 'bible')}
		>
			<Text>{bibleState.currentBible.bible.abbreviationLocal}</Text>
		</ModalSelector>
	) : (
		<Picker
			style={styles.picker}
			selectedValue={bibleState.currentBible.bible.abbreviationLocal}
		>
			{bibles.map((book) => (
				<Picker.Item label={book.name} value={book.abbreviationLocal} />
			))}
		</Picker>
	)
}

const styles = StyleSheet.create({})

export default BibleSelector
