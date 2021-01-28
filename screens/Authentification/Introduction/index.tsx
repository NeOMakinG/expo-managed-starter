import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Divider, Text, Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../../components/PageHeader';
import PageContent from '../../../components/PageContent';

import styles from '../../../globals/style';
import i18n from 'i18n-js';

export default function Introduction({navigation}) {
  const uiStyles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <PageHeader>
          <Text category='h2'>{i18n.t('introductionPage.welcome')}</Text>
        </PageHeader>

        <PageContent>
          <Button onPress={() => navigation.navigate('Login')}>{i18n.t('loginPage.submitButton')}</Button>
          <Text category='s1' style={uiStyles.textSeparator}>{i18n.t('globals.or')}</Text>
          <Button onPress={() => navigation.navigate('Register')} appearance='outline'>{i18n.t('registerPage.submitButton')}</Button>
        </PageContent>
      </SafeAreaView>
    </Layout>
  );
}

const themedStyles = StyleService.create({
  textSeparator: {
    marginVertical: 10
  }
});
