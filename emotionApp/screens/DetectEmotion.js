import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View, Button, Image, Text, Pressable} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import RNFetchBlob from 'rn-fetch-blob';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DetectEmotion = () => {
  const [image, setImage] = useState('');
  const [emotion, setEmotion] = useState('');
  const capture = () => {
    ImagePicker.openCamera({
      cropping: false,
    }).then(image => {
      uploadImage(image.path);
      setImage(image.path);
    });
  };

  const uploadImage = path => {
    RNFetchBlob.fetch('POST', 'https://9976-2402-4000-2380-17d0-615e-571c-c95f-36c4.in.ngrok.io/emo', {
      'Content-Type': 'multipart/form-data',
    }, [ 
        { name: 'file', filename: 'photo.jpg', type: 'image/jpg', data: RNFetchBlob.wrap(path) }
      ]) .then((resp) => {
        setEmotion(JSON.parse(resp.data).emotion);
        saveToDB(JSON.parse(resp.data).emotion);
      }).catch((err) => {
        console.log(err);
      });
  };

  const saveToDB = (emotion) => {
    firestore()
      .collection('emotionss')
      .add({
        emotion: emotion,
        date: new Date().getDate() + "/"+ new Date().getMonth()+"/"+new Date().getFullYear()
      })
      .then(() => {
        alert('Status added!');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Take photo and detect your emotion</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={styles.emotion}>{`You Current Emotion:  ${emotion}`}</Text>
      <Pressable
      style={styles.button}
        onPress={() => {
          capture();
        }}
      ><Text style={styles.text}>Capture and Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topic: {
    textAlign: 'center', 
fontWeight: 'bold',
fontSize: 18,
marginTop: 20,
marginBottom:30,
color:"black",
},
  button: {
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  emotion: {
    fontSize:24,
    marginTop:25,
    marginBottom:10,
    backgroundColor: 'cornflowerblue',
    color:'black'
  },

  imageContainer: {
    height: 350,
    width: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DetectEmotion;
