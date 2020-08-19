import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux'
import { View, StyleSheet, Platform } from 'react-native'

import { selectBible } from '../store/actions/bibleActions'
import { BookSelector, ChapterSelector, BibleSelector } from '../components'

const isIOS = Platform.OS === 'ios'

const Controls = ({ bibleState, selectBible }) => {
	const handleBibleChanges = (book = {}, type = '') => selectBible(book, type)

	if (bibleState.isFetching)
		return <Spinner visible={bibleState.isFetching} animation="fade" />
	return (
		<View style={styles.container}>
			<BookSelector
				bibleState={bibleState}
				handleBibleChanges={handleBibleChanges}
			/>

			<ChapterSelector
				bibleState={bibleState}
				handleBibleChanges={handleBibleChanges}
			/>

			<BibleSelector
				bibleState={bibleState}
				handleBibleChanges={handleBibleChanges}
			/>
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
		flex: 0.33
	}
})

const mapStateToProps = (state) => ({ bibleState: state.bible })

export default connect(mapStateToProps, { selectBible })(Controls)
