import { Stack } from 'expo-router';
import 'react-native-reanimated';
import NAVIGATION_CONSTANTS from "@/constants/navigation"
import { WindowDimensionsProvider } from '@/context-providers/WindowDimensionsProvider';

const ROOT_MODULES = NAVIGATION_CONSTANTS.ROOT_MODULES;

export default function RootLayout() {
  return (
    <WindowDimensionsProvider>
      <Stack>
        <Stack.Screen name={ROOT_MODULES.PLANETS_MODULE} options={{headerShown: false}}/>
        <Stack.Screen name={ROOT_MODULES.TABS_MODULE} options={{headerShown: false}}/>
      </Stack>
    </WindowDimensionsProvider>
  );
}