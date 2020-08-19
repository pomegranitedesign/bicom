import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'
import ModalSelector from 'react-native-modal-selector'

const isIOS = Platform.OS === 'ios'
const ChapterSelector = ({ bibleState, handleBibleChanges }) => {
	return isIOS ? (
		<ModalSelector
			data={bibleState.currentBible.chapters}
			keyExtractor={(item) => item.id}
			labelExtractor={(item) => item.number}
			onChange={(selectedChapter) =>
				handleBibleChanges(selectedChapter, 'chapter')}
		>
			<Text>{bibleState.currentBible.currentChapter.number}</Text>
		</ModalSelector>
	) : (
		<Picker
			style={styles.picker}
			selectedValue={currentBible.currentChapter.number}
		>
			{bibleState.currentBible.chapters.map((chapter) => (
				<Picker.Item
					key={chapter.id}
					label={chapter.number}
					value={chapter.id}
				/>
			))}
		</Picker>
	)
}

const styles = StyleSheet.create({})

export default ChapterSelector
