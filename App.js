import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './telas/Home';
import Noticia from './telas/Noticia';
import { StatusBar } from 'expo-status-bar';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#7f0000" translucent = {true}/>

      <Stack.Navigator initialRouteName="Home" headerMode="screen" screenOptions={{
        headerTintColor: 'white', headerStyle: { backgroundColor: '#b20000' }, }}>
        <Stack.Screen name="Radar 64" component={Home} />
        <Stack.Screen name="Noticia" component={Noticia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     ...Ionicons.font,
  //   });
  //   this.setState({ isReady: true });
  // }
}

export default App;
