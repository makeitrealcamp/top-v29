import { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const ImagePickerScreen = () => {
  const [image, setImage] = useState(null);

  const pickImageHandler = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.assets[0].uri)
    }
  }

  const shareImageHandler = async () => {
    const isAvailable = await Sharing.isAvailableAsync();

    if (!isAvailable) {
      Alert.alert('Sharing is not available on your platform');
      return;
    }

    await Sharing.shareAsync(image);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>ImagePicker Screen </Text>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImageHandler}
      />

      {
        image && (<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />)
      }

      <Button
        title="Share"
        onPress={shareImageHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
})

export default ImagePickerScreen
