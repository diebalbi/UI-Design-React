import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Modal, Image, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Button } from 'react-native-paper';

export const Layout = ({loading, permission, hasPermission, type, setType, camRef, takePicture, capturedPhoto, open, setOpen, saveHandler}) => {

  if (permission === '') {
    return <View />;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            bottom: 20,
            left: 20,
            position: 'absolute',
            backgroundColor: 'transparent'
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialCommunityIcons name="camera-retake" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity onPress={takePicture} style={styles.button}>
        <FontAwesome name="camera" size={25} color="#FFF" />
      </TouchableOpacity>

      { capturedPhoto && 
        <Modal 
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}> 
            <TouchableOpacity style={{margin: 10}} onPress={ () => setOpen(false) } disabled={loading}>
              <FontAwesome name="window-close" size={50} color="lightcoral" />
            </TouchableOpacity>

            <Image style={{width: '100%', height: '80%', borderRadius: 20}} source={{uri: capturedPhoto.uri}} />
          </View>
          <ActivityIndicator size="large" color="rgb(25, 118, 210)" animating={loading} />
          <Button 
            disabled={loading}
            mode="contained" 
            style={{backgroundColor: "rgb(25, 118, 210)", marginVertical: 10}} 
            onPress={saveHandler} >
            Save Image
          </Button>
        </Modal>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#121212', 
    margin: 20, 
    borderRadius: 10, 
    height: 50
  }
})