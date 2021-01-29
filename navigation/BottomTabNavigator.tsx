import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import UIKitScreen from '../screens/UIKit';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { BottomNavigation, BottomNavigationTab, Text, Icon } from '@ui-kitten/components';
import i18n from 'i18n-js';
import cliScreens from './cli-screens'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const HomeIcon = (props) => (
  <Icon {...props} name='home'/>
);

const ListIcon = (props) => (
  <Icon {...props} name='list'/>
);

const EditIcon = (props) => (
  <Icon {...props} name='edit'/>
);

const BottomTabBar = ({ navigation, state }) => {
  const insets = useSafeAreaInsets();

  return (
    <BottomNavigation
      style={{paddingBottom: insets.bottom}}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title={i18n.t('globals.home')} icon={HomeIcon}/>
      <BottomNavigationTab title={i18n.t('globals.list')} icon={ListIcon}/>
      <BottomNavigationTab title='UI Kit' icon={EditIcon}/>
    </BottomNavigation>
  )
};

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBar={props => <BottomTabBar {...props} />}
      >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="UIKit"
        component={UIKitScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title', headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title', headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
