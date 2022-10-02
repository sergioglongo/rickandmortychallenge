import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import TopTabNavigation from './src/navigation/TopTabNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/AuthContext';
import SideDrawerNavigation from './src/navigation/SideDrawerNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          {/* <NavigationStack /> */}
          <SideDrawerNavigation />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



export default App