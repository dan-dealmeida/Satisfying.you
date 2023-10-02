import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaTeste from "./src/telas/TelaTeste";
import Tela2 from "./src/telas/Tela2";
import RecuperarSenha from "./src/telas/RecuperarSenha";
import Relatorio from "./src/telas/Relatorio"
import NovaConta from "./src/telas/NovaConta"
import NovaPesquisa from "./src/telas/NovaPesquisa";

const Stack = createStackNavigator()


const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#2b1d62'}, headerTintColor: '#573fba', headerTitleStyle: {color: '#ffffff', fontSize: 26} }}>
                <Stack.Screen name="Tela2" component={Tela2}/>
                <Stack.Screen name="NovaConta" component={NovaConta}/>
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
                <Stack.Screen name="TelaTeste" component={TelaTeste} />
                <Stack.Screen name="Relatorio" component={Relatorio}/>
                <Stack.Screen name="NovaPesquisa" component={NovaPesquisa}/>

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App