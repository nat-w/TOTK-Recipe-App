import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name='Recipes'
          component={Recipes}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;