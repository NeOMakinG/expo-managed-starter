import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/UIKit/Themed';
import { Button, Layout, Divider } from '@ui-kitten/components';
import {Header} from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen({navigation}) {

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={{ width: '100%', alignItems: 'center' }}>
        <Header />
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={() => navigation.navigate('UIKit')}>Check UIKit Components</Button>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
