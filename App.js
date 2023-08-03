import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from './src/screens/Category';
import Meal from './src/screens/Meal';
import Detail from './src/screens/Detail';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category} options={{
          title:"Categories",headerTitleAlign: 'center', headerTitleStyle: {
            color: '#FFA401',fontWeight:700,
          }, headerStyle:{backgroundColor:"#fff",}
        }} />

        <Stack.Screen name="Meal" component={Meal} options={{ headerBackTitleVisible:true,
        
          title:"Meals",headerTitleAlign: 'center', headerTitleStyle: {
            color: '#FFA401',fontWeight:700,
          }, headerStyle:{backgroundColor:"#fff",}
        }} />

        <Stack.Screen name="DetailPage" component={Detail} options={{headerBackTitleVisible:true,
        
          title:"Detail",headerTitleAlign: 'center', headerTitleStyle: {
            color: '#FFA401',fontWeight:700,
          }, headerStyle:{backgroundColor:"#fff",}
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

