import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/Login';
import Register from '../screen/Register';
import Reset from '../screen/Reset';
import VerifyOTP from '../screen/VerifyOTP';
import SetPassword from '../screen/SetPassword';

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Reset}
        name="Reset"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={VerifyOTP}
        name="VerifyOTP"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={SetPassword}
        name="SetPassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
