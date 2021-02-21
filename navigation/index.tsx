import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

// Screens
import NotFoundScreen from '../screens/NotFoundScreen';
import UIKitScreen from '../screens/UIKit';
import IntroductionScreen from '../screens/Authentification/Introduction';
import LoginScreen from '../screens/Authentification/Login';
import RegisterScreen from '../screens/Authentification/Register';

// Components
import Menu from '../components/Menu';

import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import cliScreens from './cli-screens'

import fadeConfig from '../utils/fade';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <Menu {...props}/>}>
      <Drawer.Screen name="Drawer" component={RootNavigator} />
    </Drawer.Navigator>
  );
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: fadeConfig }}>
      <Stack.Screen name="Introduction" component={IntroductionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="UIKit" component={UIKitScreen} options={{ title: 'UIKit examples' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      
      {cliScreens && cliScreens.globals.map(screen => {
        return <Stack.Screen name={screen.name} component={screen.component} />
      })}
    </Stack.Navigator>
  );
}
