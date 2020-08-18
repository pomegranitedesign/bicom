import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PinchGestureHandler } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import Controls from '../components/Controls'
import { fetchBibles, selectBible } from '../store/actions/bibleActions'
import { scale, zoomEvent, onZoomStateChangeEvent } from '../utils/pinch'

const { width } = Dimensions.get('window')

class Bible extends Component {
	componentDidMount() {
		this.props.fetchBibles()
	}

	render() {
		const { bibleState } = this.props

		if (bibleState.isFetching || !bibleState.currentBible)
			return <Spinner animation="fade" />
		else
			return (
				<View>
					<PinchGestureHandler
						onGestureEvent={zoomEvent}
						onHandlerStateChange={onZoomStateChangeEvent}
					>
						<Animated.ScrollView
							style={{
								width,
								transform: [ { scale } ]
							}}
						>
							<View style={styles.container}>
								<Text style={styles.title}>The Beginning</Text>
								<Text style={styles.description}>
									{
										bibleState.currentBible.currentChapter
											.content
									}
								</Text>
							</View>
						</Animated.ScrollView>
					</PinchGestureHandler>
					<Controls
						bibles={bibleState.bibles}
						currentBible={bibleState.currentBible}
						isFetching={bibleState.isFetching}
						selectBible={selectBible}
					/>
				</View>
			)
	}
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

const mapStateToProps = (state) => ({ bibleState: state.bible })

export default connect(mapStateToProps, { fetchBibles, selectBible })(Bible)
