import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/UIKit/Themed';
import { Button, Layout } from '@ui-kitten/components';

export default function TabTwoScreen() {
  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
