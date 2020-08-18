import React from 'react'
import { Feather } from '@expo/vector-icons'
import ModalSelector from 'react-native-modal-selector'
import { Picker } from '@react-native-community/picker'
import { AntDesign } from '@expo/vector-icons'
import { Checkbox } from 'react-native-paper'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Platform
} from 'react-native'

// Check if the current platform is iOS
const isIOS = Platform.OS === 'ios'

let index = 0
const _testData = [
	{ key: index++, label: 'Genesis' },
	{ key: index++, label: 'Exodus' },
	{ key: index++, label: 'Leviticus' },
	{ key: index++, label: 'Numbers' }
]

const Search = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					onTouchCancel={() => alert('Cancelled')}
					style={styles.input}
					placeholder="Passage or Keyword"
				/>

				<TouchableOpacity>
					<Feather
						style={{ marginBottom: 10 }}
						name="search"
						size={24}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.bibleVersionContainer}>
				<Text style={styles.title}>Bible Version</Text>
				{isIOS ? (
					<ModalSelector data={_testData}>
						<View style={styles.modalSelectorContainer}>
							<Text>{_testData[0].label}</Text>
							<AntDesign
								name="caretdown"
								size={16}
								color="black"
							/>
						</View>
					</ModalSelector>
				) : (
					<Picker
						style={styles.picker}
						selectedValue={_testData[0].label}
					>
						<Picker.Item label="Genesis" value="Genesis" />
						<Picker.Item label="Exodus" value="Exodus" />
						<Picker.Item label="Leviticus" value="Leviticus" />
						<Picker.Item label="Numbers" value="Numbers" />
					</Picker>
				)}
			</View>

			<View style={styles.selectContainer}>
				<View style={styles.select}>
					<View style={styles.selectInfo}>
						<Text style={{ ...styles.title, marginBottom: 0 }}>
							Search Entire Bible
						</Text>
						<Text style={styles.description}>
							Genesis to Revelation
						</Text>
					</View>
					<Checkbox
						status="checked"
						color="#084480"
						style={styles.checkbox}
					/>
				</View>
			</View>

			<View style={styles.select}>
				<View style={styles.selectInfo}>
					<Text style={{ ...styles.title, marginBottom: 0 }}>
						Search Old Testament
					</Text>
					<Text style={styles.description}>Genesis to Malachai</Text>
				</View>
				<Checkbox
					status="checked"
					color="#084480"
					style={styles.checkbox}
				/>
			</View>

			<View style={styles.select}>
				<View style={styles.selectInfo}>
					<Text style={{ ...styles.title, marginBottom: 0 }}>
						Search New Testament
					</Text>
					<Text style={styles.description}>
						Matthew to Revelation
					</Text>
				</View>
				<Checkbox
					status="checked"
					color="#084480"
					style={styles.checkbox}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 30
	},

	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		flex: 1,
		marginRight: -30
	},

	bibleVersionContainer: {
		marginTop: 60
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10
	},

	modalSelectorContainer: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 10
	},

	selectContainer: {
		marginTop: 60
	},

	select: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		paddingBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 30
	},

	description: {
		fontWeight: '300'
	},

	checkbox: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 100
	}
})

export default Search
