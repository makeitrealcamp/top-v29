import { View } from 'react-native'

const FlexDimensionsBasic = () => {
  return(
    <View style={{ height: '100%' }}>
      <View style={{ height: '15%', backgroundColor: 'powderblue' }} />
      <View style={{ height: '60%', width: '33%', backgroundColor: 'skyblue' }} />
      <View style={{ height: '33%', width: '50%', backgroundColor: 'steelblue'}} />
    </View>
  )
}

export default FlexDimensionsBasic
