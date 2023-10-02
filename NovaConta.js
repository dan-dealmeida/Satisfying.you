import { StyleSheet, Text, TextInput, View } from "react-native"
import Botao from "./Components/Botao"
import { useState } from "react"

const NovaConta = () => {
    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [txtSenha2, setSenha2] = useState('')
    const [txtAlerta, setAlerta] = useState('')

    const validar = () => {
        if (txtSenha !== txtSenha2) {
            setAlerta("Senhas estão diferentes")
        } else if (!validarEmail(txtEmail)) {
            setAlerta("Email inválido")
        } else {
            setAlerta('')
            // Cadastrar o usuário
        }
    }

    const validarEmail = (email) => {
        // Expressão regular para validar o formato do e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    return (
        <View style={estilo.tela}>
            <View style={estilo.parte1}>
                <View>
                    <Text style={estilo.Texto}>E-mail</Text>
                    <TextInput style={estilo.escrita} value={txtEmail} onChangeText={setEmail} />
                </View>

                <View>
                    <Text style={estilo.Texto}>Senha</Text>
                    <TextInput style={estilo.escrita} secureTextEntry={true} value={txtSenha} onChangeText={setSenha} />
                </View>

                <View>
                    <Text style={estilo.Texto}>Repetir Senha</Text>
                    <TextInput style={estilo.escrita} secureTextEntry={true} value={txtSenha2} onChangeText={setSenha2} />
                    <Text style={estilo.errou}>{txtAlerta}</Text>
                </View>
            </View>

            <View style={estilo.botao}>
                <Botao texto="CADASTRAR" funcao={validar} />
            </View>

        </View>
    )
}

const estilo = StyleSheet.create({
    tela: {
        backgroundColor: '#372775',
        padding: 35,
        flex: 1
    },
    parte1: {
        flex: 0.75,
        justifyContent: "center",
        gap: 10
    },
    Texto: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#ffffff'
    },
    escrita: {
        backgroundColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#3F92C5'
    },
    errou: {
        fontSize: 20,
        color: 'red'
    },
    botao: {
        flex: 0.25,
    }
})

export default NovaConta;
