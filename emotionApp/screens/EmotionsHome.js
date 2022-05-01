import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View, Text, Button, Pressable} from 'react-native';

const EmotionsHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
      style={styles.button}
        onPress={() => {
          navigation.navigate('DetectEmotion');
        }}
        ><Text style={styles.text}>Detect Emotion</Text>
      </Pressable>
      <Pressable
      style={styles.button}
        onPress={() => {
          navigation.navigate('ReadPhycology');
        }}
      ><Text style={styles.text}>Read about psychology</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  button:{
    height:100,
    marginBottom: 50,
    marginTop: 50,
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'dodgerblue',
    fontsize: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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

export default EmotionsHome;
