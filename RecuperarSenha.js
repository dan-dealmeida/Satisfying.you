import { StyleSheet, Text, TextInput, View } from "react-native";
import Botao from "../Components/Botao";
import { useState } from "react";

const RecuperarSenha = (props) =>{

    const [txtEmail, setEmail] = useState('')
    const [txtError, setError] = useState('')

    const validar = () => {
        if(txtEmail != 0){
            setError('E-mail invalido')
        }
        else{
            setError("")
        }
        
    }

    return(
        <View style={estilo.tela}>
            <View style={estilo.cImput}>
                <Text style={estilo.Texto} >E-mail: </Text>
                <TextInput style={estilo.escrita}  value={txtEmail} onChangeText={setEmail}/>
                <Text style={estilo.erroou}>{txtError}</Text>
            </View>

            <View style={estilo.cBotao}>
                <Botao texto="Recuperar" funcao={validar}/>
            </View>

        </View>

    )
}

const estilo = StyleSheet.create({
    erroou:{
        fontSize: 20,
        color: 'red'
    },
    Texto:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#ffffff'
    },
    tela:{
        backgroundColor: '#372775',
        padding: 35,
        flex: 1
        
    },
    escrita:{
        backgroundColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#3F92C5'
    },
    cImput:{
        flex: 0.5,
        justifyContent: "flex-end"

        
    },
    cBotao:{
        flex: 0.25,
        justifyContent: "center"
    }
})

export default RecuperarSenha