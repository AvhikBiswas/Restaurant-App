import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ViewAllScreen from '../screens/ViewAllScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="ViewAll" options={{headerShown:false}} component={ViewAllScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
