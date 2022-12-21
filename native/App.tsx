// Expo
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

// Main
import { Main } from './src/Main';

// Intl
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {

  const [isFontsLoaded] = useFonts({
    'Oxanium-400': require('./src/assets/fonts/Oxanium-Regular.ttf'),
    'Oxanium-600': require('./src/assets/fonts/Oxanium-SemiBold.ttf'),
    'Oxanium-700': require('./src/assets/fonts/Oxanium-Bold.ttf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <Main />
      <StatusBar style='dark'/>
    </>
  );
}
