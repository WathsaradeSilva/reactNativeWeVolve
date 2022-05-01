import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';


const ReadPhycology = () => {
    return ( 
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.topic}> Psychological disorders </Text>
        <Text style={styles.condition}>Depression</Text>
        <Text style={styles.article}>Depression is a common illness worldwide, with an estimated 3.8% of the population affected, including 5.0% among adults and 5.7% 
            among adults older than 60 years (1). Approximately 280 million people in the world have depression (1). Depression is different from
             usual mood fluctuations and short-lived emotional responses to challenges in everyday life. Especially when recurrent and with 
             moderate or severe intensity, depression may become a serious health condition. It can cause the affected person to suffer greatly 
             and function poorly at work, at school and in the family. At its worst, depression can lead to suicide. Over 700 000 people die due
              to suicide every year. Suicide is the fourth leading cause of death in 15-29-year-olds.
             Although there are known, effective treatments for mental disorders, more than 75% of people in low- and middle-income countries
              receive no treatment (2).  Barriers to effective care include a lack of resources, lack of trained health-care providers and social
               stigma associated with mental disorders. In countries of all income levels, people who experience depression are often not correctly
                diagnosed, and others who do not have the disorder are too often misdiagnosed and prescribed antidepressants</Text>
        <Text style={styles.condition}>OCD</Text>
        <Text style={styles.article}>Obsessive-compulsive disorder (OCD) is a mental illness that causes repeated unwanted thoughts or sensations (obsessions) or the urge 
            to do something over and over again (compulsions). Some people can have both obsessions and compulsions.

        OCD isn’t about habits like biting your nails or thinking negative thoughts. An obsessive thought might be that certain numbers or colors are “good” or “bad.”
        A compulsive habit might be to wash your hands seven times after touching something that could be dirty.
        Although you may not want to think or do these things, you feel powerless to stop.</Text>
        <Text style={styles.condition}>Bipolar disorder</Text>
        <Text style={styles.article}>Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional
         highs (mania or hypomania) and lows (depression).When you become depressed, you may feel sad or hopeless and lose interest or pleasure in 
         most activities. When your mood shifts to mania or hypomania (less extreme than mania), you may feel euphoric, full of energy or unusually irritable. These mood swings 
         can affect sleep, energy, activity, judgment, behavior and the ability to think clearly.
        Episodes of mood swings may occur rarely or multiple times a year. While most people will experience some emotional symptoms between episodes, some may not experience any.
        Although bipolar disorder is a lifelong condition, you can manage your mood swings and other symptoms by following a treatment plan. In most cases, bipolar disorder is
         treated with medications and psychological counseling (psychotherapy).</Text>         

        </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    topic: {
        textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    color:"black"
    },

    condition:{
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color:"black"
    },

    article:{
        fontSize: 14,
        marginTop: 20,
        marginLeft: 20,
        marginRight:20,
        color:"black"
    }
    
});

export default ReadPhycology; 