import * as React from 'react';
import { View, Dimensions, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { StyleService, Layout, Divider, Text, useStyleSheet } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PageContent({navigation, children}) {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.content}>
      {children}
    </View>
  );
}

const themedStyles = StyleService.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: windowHeight / 4 * 3,
    flex: 1
  }
});
