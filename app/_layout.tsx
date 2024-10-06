import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="rider/index" options={{ headerShown: false }} />
        <Stack.Screen name="rider/name" options={{ headerShown: false }} />
        <Stack.Screen name="rider/phone" options={{ headerShown: false }} />
        <Stack.Screen name="rider/prefernce" options={{ headerShown: false }} />
        <Stack.Screen name="rider/final" options={{ headerShown: false }} />
        <Stack.Screen name="rider/home/index" options={{ headerShown: false }} />
        <Stack.Screen name="rider/home/location" options={{ headerShown: false }} />
        <Stack.Screen name="rider/home/canceled" options={{ headerShown: false }} />
        <Stack.Screen name="rider/home/feedback" options={{ headerShown: false }} />



        <Stack.Screen name="driver/index" options={{ headerShown: false }} />
        <Stack.Screen name="driver/name" options={{ headerShown: false }} />
      {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    </ThemeProvider>
  );
}
