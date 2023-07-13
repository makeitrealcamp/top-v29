import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet,
  TouchableOpacity, View,
  Image,
  Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Landing from './screens/Landing';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <>
    //   <Login />
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});
