import { Text, View, Button } from "react-native";
import Botao from "./Botao";
import RecuperarSenha from "./RecuperarSenha";
import Relatorio from "./Relatorio";


const Tela2 = (props) =>{

    const proxPag = () => {
        props.navigation.navigate('Login')
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

  const proxPag6 = () => {
    props.navigation.navigate('Home')
  }

  const proxPag7 = () => {
    props.navigation.navigate('NovaConta')
  }

  const proxPag8 = () => {
    props.navigation.navigate('AcoesPesquisa')
  }

  const proxPag9 = () => {
    props.navigation.navigate('Coleta')
  }


    return(
        <View>
          <Button title="Login" onPress={proxPag}/>
          <Button title="Nova Conta" onPress={proxPag7}/>
          <Button title="Recuperar Senha" onPress={proxPag2}/>
          <Button title="Home" onPress={proxPag6}/>
          <Button title="Nova Pesquisa" onPress={proxPag5}/>
          <Button title="Acoes Pesquisa" onPress={proxPag8}/>
          <Button title="relatorio" onPress={proxPag3}/>
          <Button title="Coleta" onPress={proxPag9}/>
        </View>
    )
}

export default Tela2
