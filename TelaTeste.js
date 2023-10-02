import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import Botao from "../Components/Botao"
const TelaTeste = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [txtola, setola ] = useState('')

    const mostraEmail = () => {
        setola("Ola Mundo")
    }

    return (
        <View>

            <View>
                <Text style={estilo.texto}>Email </Text>
                <TextInput style={estilo.fundo} value={txtEmail} onChangeText={setEmail} />


                <Text>{txtEmail}</Text>
                <Text>{txtola}</Text>

                <Botao texto="Email" funcao={mostraEmail}/>

                



            </View>


            <View>
                
            </View>

        </View>


    )
}

const estilo = StyleSheet.create({
    fundo:{
        backgroundColor: '#37BD6D'
    },
    texto:{
        color: 'blue',
        fontSize: 26,
        fontFamily: 'AveriaLibre-Regular'
    }

})


export default TelaTeste