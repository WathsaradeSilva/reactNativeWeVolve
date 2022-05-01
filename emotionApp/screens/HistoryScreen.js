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
        emo.push(documentSnapshot.data().emotion+"    "+documentSnapshot.data().date);
      });
    });
    setDocs(emo)
  }

  return (
   <View>
     <Text style={styles.topic}>{`Emotion Data Log`}</Text>
     <Text style={styles.topic2}>Emotion      Date</Text>
            
            <FlatList
        data={docs}
        style={styles.sectionContainer}
        renderItem={(item)=><Text style={styles.sectionContainer}>{item.item}</Text>}
        keyExtractor={(item,index) => index}
      />
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 60,
    backgroundColor:"aqua",
    color:"black",
    textAlign: 'center',
    fontSize: 18
  },
  topic: {
    textAlign: 'center', 
fontWeight: 'bold',
fontSize: 28,
marginTop: 20,
color:"black",
},
topic2: {
  textAlign: 'center', 
fontWeight: 'bold',
fontSize: 18,
marginTop: 20,
color:"black",
},
parent: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor:"red"
}
});

export default HistoryScreen;
