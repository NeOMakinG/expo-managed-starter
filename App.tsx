import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry} from '@ui-kitten/components';
import { theme } from './constants/theme';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Localization
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import fr from './i18n/fr.json';
import en from './i18n/en.json';

i18n.translations = {
  fr,
  en
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva[colorScheme], ...theme}}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </>
    );
  }
}
