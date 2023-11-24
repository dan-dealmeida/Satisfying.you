import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaTeste from "./src/pages/TelaTeste";
import Tela2 from "./src/pages/Tela2";
import RecuperarSenha from "./src/pages/RecuperarSenha";
import Relatorio from "./src/pages/Relatorio";
import NovaConta from "./src/pages/NovaConta";
import NovaPesquisa from "./src/pages/NovaPesquisa";
import Home from "./src/pages/Home";
import LoginScreen from "./src/pages/Login";
import AcoesPesquisaScreen from "./src/pages/AcoesPesquisa";
import coleta from "./src/pages/Coleta";


const Stack = createStackNavigator()


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#2b1d62'}, headerTintColor: '#573fba', headerTitleStyle: {color: '#ffffff', fontSize: 26} }}>
        <Stack.Screen name="Tela" component={Tela2}/>
        <Stack.Screen name="NovaConta" component={NovaConta}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
        <Stack.Screen name="TelaTeste" component={TelaTeste} />
        <Stack.Screen name="Relatorio" component={Relatorio}/>
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisaScreen}/>
        <Stack.Screen name="Coleta" component={coleta}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
