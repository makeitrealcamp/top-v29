import { useState } from 'react'
import { View, Text } from 'react-native'

const Counter = ({ message }) => {
  const [count, setCount] = useState(0)

  return(
    <View>
      <Text>
        {message} - {count}
      </Text>
    </View>
  )
}

export default Counter
