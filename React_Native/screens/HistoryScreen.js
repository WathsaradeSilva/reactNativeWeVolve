import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native';

const HistoryScreen = () => {
  const [docs,setDocs] = useState([])
 const isFocus = useIsFocused()
  useEffect(()=>{
    getDetails()
  },[isFocus])

  const getDetails = async()=>{
    const emo = [];
   await firestore()
    .collection('emotionss')
    .get()
    .then(querySnapshot => { 
      querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot.data())
        emo.push(documentSnapshot.data().emotion+" "+documentSnapshot.data().date);
      });
    });
    setDocs(emo)
  }

  return (
   <View>
     <Text style={styles.topic}>{`Emotion Data Log`}</Text>
            <FlatList
        data={docs}
        style={styles.sectionContainer}
        renderItem={(item)=><Text style={{fontWeight:'bold',color: "blue"}}>{item.item}</Text>}
        keyExtractor={(item,index) => index}
      />
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 60,
  },
  topic: {
    textAlign: 'center', 
fontWeight: 'bold',
fontSize: 18,
marginTop: 20,
color:"black"
},
});

export default HistoryScreen;
