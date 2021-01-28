import React from 'react';
import { View, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { Drawer, DrawerItem, IndexPath, Layout, Icon, Divider } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from 'i18n-js';

const windowHeight = Dimensions.get('window').height;

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const SettingsIcon = (props) => (
  <Icon {...props} name='settings-outline'/>
);

const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../assets/images/background.jpeg')}
    />
    <Divider/>
  </React.Fragment>
);

export default function ({navigation, state}) {
  return (
    <Layout style={{minHeight: windowHeight }}>
      <Drawer
        header={Header}
        selectedIndex={new IndexPath(state.index)}
        onSelect={index => navigation.navigate(state.routeNames[index.row])}>
        <DrawerItem 
          title={i18n.t('menu.profile')}
          accessoryLeft={PersonIcon}
          accessoryRight={ForwardIcon}
        />
        <DrawerItem 
          title={i18n.t('menu.parameters')}
          accessoryLeft={SettingsIcon}
          accessoryRight={ForwardIcon}
        />
      </Drawer> 
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    minHeight: 128,
    width: '100%'
  },
});
