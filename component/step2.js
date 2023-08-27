import React from "react";
import {View, Text, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';

export default function Step2(){
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
        submit:{
            marginRight:40,
            marginLeft:15,
            backgroundColor:"#FAFAFA",
            width:'95%',
            height:60,
            borderRadius:15,
            marginBottom:20,
            elevation:12,
            shadowColor:"#000",
            shadowOffset:{width:2,height:0}
        },
        submitText:{
            paddingTop:10,
            paddingBottom:20,
            color:'#fff',
            textAlign:'center',
            fontSize:20
          
        },
      });
    return(
        <View style={styles.container}>
            <Text>About Child</Text>

            <View>
                <Text style={styles.label}>Child height</Text>
                <TextInput style={styles.input} 
                placeholder = "Child height"/>
            </View>

            <View>
                <Text style={styles.label}>Child width</Text>
                <TextInput style={styles.input} 
                placeholder = "child width"/>
            </View>

            <TouchableHighlight style={styles.submit}
                onPress={() => 
                    
                    navigation.navigate('step4')
                }
                >
                    <Text style={styles.submitText}> Next </Text>
            </TouchableHighlight>
        </View>
    );
}