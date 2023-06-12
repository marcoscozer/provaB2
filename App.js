
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/components/loginPage';
import PasswordRecoveryPage from './src/components/PasswordRecoveryPage';
import FilmePage from './src/components/FilmePage';
import DashboardPage from './src/components/DashboardPage';
import CadastroPage from './src/components/CadastroPage';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="DashboardPage" component={DashboardPage} /> 
        <Stack.Screen name="Cadastro" component={CadastroPage} /> 
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryPage} /> 
        <Stack.Screen name="Filme" component={FilmePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default App;


