import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/splash';
import Home from './screens/home';
import Selection from './screens/selection';
import Prescriptionlist from './screens/prescriptionlist';
import Presview from './screens/presview';
import Menu from './screens/menu';
import CameraPill from './screens/camerapill';
import PatientProfile from './screens/patientprofile';
import Scanqr from './screens/scanqr';
import Body from './screens/body';
import Temp from './screens/temp';
import Pulse from './screens/pulse';
import Oxygen from './screens/oxygen';
import Weight from './screens/weight';
import Steps from './screens/steps';
import Gsr from './screens/gsr';
import Prescreate from './screens/prescreate';
import DocProfile from './screens/docprofile';
import Docscan from './screens/docscan';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
        name="Splash" 
        component={Splash}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Selection" 
        component={Selection}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false}} 
        /> 
         <Stack.Screen 
        name="Menu" 
        component={Menu}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Prescriptionlist" 
        component={Prescriptionlist}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Presview" 
        component={Presview}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="CameraPill" 
        component={CameraPill}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="PatientProfile" 
        component={PatientProfile}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Scanqr" 
        component={Scanqr}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Body" 
        component={Body}
        options={{ headerShown: false}} 
        /> 
         <Stack.Screen 
        name="Temp" 
        component={Temp}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Pulse" 
        component={Pulse}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Oxygen" 
        component={Oxygen}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Weight" 
        component={Weight}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Steps" 
        component={Steps}
        options={{ headerShown: false}} 
        /> 
         <Stack.Screen 
        name="Gsr" 
        component={Gsr}
        options={{ headerShown: false}} 
        /> 
         <Stack.Screen 
        name="Prescreate" 
        component={Prescreate}
        options={{ headerShown: false}} 
        /> 
         <Stack.Screen 
        name="Docprofile" 
        component={DocProfile}
        options={{ headerShown: false}} 
        /> 
        <Stack.Screen 
        name="Docscan" 
        component={Docscan}
        options={{ headerShown: false}} 
        />
        
        </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
