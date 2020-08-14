import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { View, Text, StyleSheet, Platform } from 'react-native'
import ModalSelector from 'react-native-modal-selector'
import { SeparatorLine } from '../components'
import { Picker } from '@react-native-community/picker'
import { Checkbox } from 'react-native-paper'

// Check if the current platform is iOS
const isIOS = Platform.OS === 'ios'

let index = 0
const _testData = [
	{ key: index++, label: 'Genesis' },
	{ key: index++, label: 'Exodus' },
	{ key: index++, label: 'Leviticus' },
	{ key: index++, label: 'Numbers' }
]

const _testData1 = [
	{ key: index++, label: 'Russian' },
	{ key: index++, label: 'Chinese' },
	{ key: index++, label: 'French' },
	{ key: index++, label: 'Australian' }
]

const Settings = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.selectContainer}>
				<Text style={styles.title}>Language</Text>
				<View style={styles.languageSelectContainer}>
					{isIOS ? (
						<ModalSelector data={_testData1}>
							<View style={styles.modalSelectorContainer}>
								<Text>{_testData1[0].label}</Text>
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
							selectedValue={_testData1[0].label}
						>
							<Picker.Item label="Russian" value="Russian" />
							<Picker.Item label="Chinese" value="Chinese" />
							<Picker.Item label="French" value="French" />
							<Picker.Item
								label="Australian"
								value="Australian"
							/>
						</Picker>
					)}
				</View>
			</View>

			<SeparatorLine />

			{/* Bible Version Select */}
			<View style={styles.selectContainer}>
				<Text style={styles.title}>Bible Version</Text>
				<View style={styles.languageSelectContainer}>
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
			</View>

			<SeparatorLine />

			{/* Allow friends to know what I am reading checkmark */}
			<View style={styles.allowContainer}>
				<Text style={styles.smallTitle}>
					Allow friends to know what I am reading
				</Text>
				<Checkbox status="checked" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 30
	},

	languageSelectContainer: {},

	selectContainer: {},

	modalSelectorContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	title: {
		fontSize: 20,
		fontWeight: 'normal',
		marginBottom: 10
	},

	allowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	smallTitle: {
		fontSize: 16,
		width: 250,
		marginTop: 10
	}
})

export default Settings
