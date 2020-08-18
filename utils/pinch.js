import { Animated } from 'react-native'
import { State } from 'react-native-gesture-handler'

export const scale = new Animated.Value(1)
export const zoomEvent = Animated.event([ { nativeEvent: { scale } } ], {
	useNativeDriver: true
})
export const onZoomStateChangeEvent = (event) => {
	if (event.nativeEvent.oldState === State.ACTIVE)
		Animated.spring(scale, {
			toValue: 1,
			useNativeDriver: true
		}).start()
}
