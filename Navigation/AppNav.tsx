import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ViewAllScreen from '../screens/ViewAllScreen';
import {NavigationContainer} from '@react-navigation/native';
import FilterModel from '../screens/FilterScreen';
import FillterdDataScreen from '../screens/FillterdDataScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} /> 
        <Stack.Screen name="Filter" options={{headerShown:false}} component={FilterModel} />
        <Stack.Screen name="FilterData" options={{headerShown:false}} component={FillterdDataScreen} />
        <Stack.Screen name="ViewAll" options={{headerShown:false}} component={ViewAllScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
