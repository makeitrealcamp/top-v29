import { KeyboardAvoidingView, StyleSheet, Platform, Button } from 'react-native'

import LoginForm from '../components/Form/Login'

const LoginScreen = ({ navigation} ) => {
  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LoginForm navigate={navigation.navigate} />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Go to Landing"
        onPress={() => navigation.navigate('Landing')}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    // borderRadius: 100,
  },
  button: { backgroundColor: "#BB86FC", padding: 7, marginTop: 10 },
  buttonText: { fontSize: 20, color: "#fff" },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});


export default LoginScreen
