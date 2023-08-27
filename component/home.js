import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';


const Stack = createNativeStackNavigator();

export default function Home(){

    return(
        <View>
            <Text>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</Text>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                    name="step1" 
                    component={Step1} />

                    <Stack.Screen
                    name="Step2" 
                    component={Step2} />

                    <Stack.Screen
                    name="Step3" 
                    component={Step3} />

                    <Stack.Screen 
                    
                    name="Step4" 
                    component={Step4} />

                    <Stack.Screen 
                    
                    name="Step5" 
                    component={Step5} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );

}