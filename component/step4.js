import React from "react";
import {View, Text, TextInput, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';

export default function Step4(){
    const navigation = useNavigation();
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
                <Text style={styles.label}>Pediatricien name</Text>
                <TextInput style={styles.input} />
            </View>

            <View>
                <Text style={styles.label}>Does has chronic deseases</Text>
                <View>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} /> 
                </View>
                
            </View>

            <View>
                <Text style={styles.label}>Everyone has their own of fever. 
                How many times in the last 12 months has TEST hada febrile illness?</Text>
                <TextInput style={styles.input} />
            </View>

            <TouchableHighlight style={styles.submit}
                onPress={() => 
                    
                    navigation.navigate('step5')
                }
                >
                    <Text style={styles.submitText}> Next </Text>
            </TouchableHighlight>
        </View>
    );
}