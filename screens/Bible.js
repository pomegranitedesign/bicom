import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PinchGestureHandler } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import Controls from '../components/Controls'
import { fetchBibles } from '../store/actions/bibleActions'
import { scale, zoomEvent, onZoomStateChangeEvent } from '../utils/pinch'

const { width } = Dimensions.get('window')

class Bible extends Component {
	componentDidMount() {
		this.props.fetchBibles()
	}

	render() {
		const { bibleState } = this.props

		if (bibleState.isFetching)
			return <Spinner visible={bibleState.isFetching} animation="fade" />
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
							{/* <Text style={styles.title}>The Beginning</Text> */}
							<Text style={styles.description}>
								{bibleState.currentBible.currentChapter.content}
							</Text>
						</View>
					</Animated.ScrollView>
				</PinchGestureHandler>
				<Controls />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		height: '100%'
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20
	},

	description: {
		marginBottom: 10,
		fontWeight: '300',
		lineHeight: 20,
		paddingBottom: 40
	}
})

const mapStateToProps = (state) => ({ bibleState: state.bible })

export default connect(mapStateToProps, { fetchBibles })(Bible)
