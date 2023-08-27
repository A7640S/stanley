import React from "react";
import {View, Text, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';


export default function Step5(){
    
    const styles = StyleSheet.create({
        container: {
          padding: 20,
        },
        label: {
          fontWeight: 'bold',
          marginBottom: 5,
        },
        input: {
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
        },
      });
    return(
        <View style={styles.container}>
            <Text>Medical History</Text>
            <View>
                <Text style={styles.label}>Does TEST tend to fever high (over 40 degrees)</Text>
                <TextInput style={styles.input} />
            </View>

            <View>
                <Text style={styles.label}>In case of fever increase, you would TEST</Text>
                <TextInput style={styles.input} />
            </View>

            <View>
                <Text style={styles.label}>Has TEST taken antipyretic drugs (paracetamol or ibuprofen) i the last 10 months?</Text>
                <TextInput style={styles.input} />
            </View>

            <TouchableHighlight style={styles.submit}>
                <Text style={styles.submitText}> Next </Text>
            </TouchableHighlight>
        </View>
    );
}