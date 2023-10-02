import { Text, View, Button } from "react-native";
import Botao from "../Components/Botao";
import RecuperarSenha from "./RecuperarSenha";
import Relatorio from "./Relatorio";


const Tela2 = (props) =>{

    const proxPag = () => {
        props.navigation.navigate('TelaTeste')
    }
    const proxPag2 = () => {
        props.navigation.navigate('RecuperarSenha')
    }
    const proxPag3 = () => {
        props.navigation.navigate('Relatorio')
    }
    const proxPag4 = () => {
        props.navigation.navigate('NovaConta')
    }
    const proxPag5 = () => {
        props.navigation.navigate('NovaPesquisa')
    }


    return(
        <View>
            <Text>Ola Mundo 2</Text>
            
            <Button title="olaa" onPress={proxPag}/>
            <Button title="recuperar" onPress={proxPag2}/>
            <Button title="relatorio" onPress={proxPag3}/>
            <Button title="NovaConta" onPress={proxPag4}/>
            <Button title="NovaPesquisa" onPress={proxPag5}/>

        </View>
    )
}

export default Tela2