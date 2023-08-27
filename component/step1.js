import React from "react";
import {View, Text, TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';


export default function Step1(){
    const navigation = useNavigation();
    return (
        <View 
        style={{backgroundColor : '#E2E4E7', width: 'auto', height: 'auto'}}>
            <View>
                <Text>Hallo</Text>
            </View>
            <View syle={{fontWeight: 'Bold'}}>
                <Text>Was möchten {'\n'} Sie tun?</Text>
            </View>
            <View>
                <Image
                style={{}}
                source = {require('')}
                />
                <Text>Mein Kind {'\n'}  hat Fieber</Text>
                <View >
                    <Text>Weiter</Text>
                    <EvilIcons name="chevron-right" size={24} color="black" />
                </View>
            </View>

            <View>
                <Image
                style={{}}
                source = {require('')}
                />
                <Text>Infos Uber {'\n'} Fieber</Text>

                <View>
                    <Text>Weiter</Text>
                    <EvilIcons name="chevron-right" size={24} color="black" />
                    
                </View>

            </View>
        </View>
    );

}