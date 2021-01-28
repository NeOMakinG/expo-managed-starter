import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { StyleService, Layout, Divider, Text, useStyleSheet } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PageHeader({navigation, children}) {
  const styles = useStyleSheet(themedStyles);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.content, {marginTop: -insets.top, paddingTop: insets.top}]}>
      {children}
    </View>
  );
}

const themedStyles = StyleService.create({
  content: {
    backgroundColor: 'background-basic-color-4',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    height: windowHeight / 4,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20.78,
    elevation: 22,
  }
});
