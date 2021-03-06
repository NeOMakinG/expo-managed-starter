import * as React from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { Layout, Divider, Text, Button, StyleService, useStyleSheet, Input, Icon } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../../../components/PageHeader';
import PageContent from '../../../components/PageContent';
import {Header} from '../../../components/Header';
import { Formik } from 'formik';

import styles from '../../../globals/style';
import i18n from 'i18n-js';

export default function Login({navigation}) {
  const uiStyles = useStyleSheet(themedStyles);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Header navigation={navigation} title={i18n.t('loginPage.title')} />

        <PageContent>
          <Formik
            initialValues={{ email: '', password: '' }}
             onSubmit={values => console.log(values)}
           >
             {({ handleChange, handleBlur, handleSubmit, values }) => (
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={themedStyles.keyboard}
              >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <ScrollView>
                   <Input
                     onChangeText={handleChange('email')}
                     onBlur={handleBlur('email')}
                     value={values.email}
                     label={i18n.t('loginPage.loginLabel')}
                     labelStyle={styles.inputLabel}
                   />

                   <Input
                     onChangeText={handleChange('password')}
                     onBlur={handleBlur('password')}
                     value={values.password}
                     label={i18n.t('loginPage.passwordLabel')}
                     secureTextEntry={secureTextEntry}
                     accessoryRight={renderIcon}
                     labelStyle={styles.inputLabel}
                   />
                    <Button onPress={handleSubmit}>{i18n.t('loginPage.submitButton')}</Button>
                  </ScrollView>
                </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
             )}
           </Formik>
        </PageContent>
      </SafeAreaView>
    </Layout>
  );
}

const themedStyles = StyleService.create({
  keyboard: {
    flex: 1,
  }
});
