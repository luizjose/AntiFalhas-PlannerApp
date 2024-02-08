import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import MainRoutes from './src/routes/main.routes';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import  'react-native-gesture-handler'
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (

<GestureHandlerRootView style={{flex: 1}}>
  
   <ThemeProvider theme={theme}>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
    />
  


    <NavigationContainer>
      {fontsLoaded ?   <MainRoutes/> : <Loading/> }
    
    </NavigationContainer>
   </ThemeProvider>
   </GestureHandlerRootView>
  );
}


