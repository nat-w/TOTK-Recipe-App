import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home'
import Cook from './components/Cook'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name='Cook'
          component={Cook}
          options={{title: 'Cook page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;