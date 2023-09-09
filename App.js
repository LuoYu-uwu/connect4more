import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import SnakeandLadder from './screens/SnakeandLadder';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TiktokShop from './screens/TiktokShop';
import Points from './screens/Points';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TiktokShop">
          <Stack.Screen name="SnakeandLadder" component={SnakeandLadder} />
          <Stack.Screen name="TiktokShop" component={TiktokShop} />
          <Stack.Screen name="Points" component={Points} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
