import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Divider, Text, Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../../components/PageHeader';
import PageContent from '../../../components/PageContent';
import {Header} from '../../../components/Header';

import styles from '../../../globals/style';
import i18n from 'i18n-js';

export default function Login({navigation}) {
  const uiStyles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Header navigation={navigation} title={i18n.t('loginPage.title')} />

        <PageContent>
          <Button onPress={() => navigation.navigate('Login')}>{i18n.t('loginPage.submitButton')}</Button>
        </PageContent>
      </SafeAreaView>
    </Layout>
  );
}

const themedStyles = StyleService.create({
});
