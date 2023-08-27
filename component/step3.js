import React from "react";
import {View, Text, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';





export default function Step3(){
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
      
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>About Child</Text>

            <View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} 
                    placeholder = "Child name"/>
                </View>
            <View>
                <View>
                    <Text style={styles.label}>Date of birth</Text>
                    <View>
                        <TextInput style={styles.input}
                        placeholder = "Month" />
                        <TextInput style={styles.input}
                        placeholder = "Year" />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.label}>Gender</Text>
                    <View>
                        <TextInput style={styles.input}
                        placeholder = "Male" />
                        <TextInput style={styles.input} 
                        placeholder = "Female" />
                    </View>
                </View>
            </View>

            <TouchableHighlight style={styles.submit}
                onPress={() => 
                    
                    navigation.navigate('step2')
                }
                >
                    <Text style={styles.submitText}> Next </Text>
            </TouchableHighlight>
        </View>
    );
}