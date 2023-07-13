import { View } from 'react-native'

const FlexDimensionsBasic = () => {
  return(
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue'}} />
    </View>
  )
}

export default FlexDimensionsBasic
