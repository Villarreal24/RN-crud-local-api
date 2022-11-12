import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './src/views/Home';
import NewClient from './src/views/NewClient';
import DetailsClient from './src/views/DetailsClient';
import BarTop from './src/components/ui/Bar';

import {  MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#05B2C3',
    secondary: '#036BAF',
  },
};

console.log(theme)

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary
          },
          headerTintColor: theme.colors.surface,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={ ({navigation, route}) => ({
            title: "Inicio",
            headerLeft: (props) => <BarTop {...props} 
                  navigation={navigation}
                  route={route}
            />
          })}
        />
        <Stack.Screen
          name="NewClient"
          component={NewClient}
          options={{
            title: "Nuevo cliente"
          }}
        />
        <Stack.Screen
          name="DetailsClient"
          component={DetailsClient}
          options={{
            title: "Detalles cliente"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
