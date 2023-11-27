import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native"
import Botao from "../Components/Botao"
import { useState } from "react"
import { launchCamera, launchImageLibrary} from "react-native-image-picker"




const NovaPesquisa = () => {

    const [txtNome, setNome] = useState('')
    const [timeData, setData] = useState('')
    const [Imag, setImg] = useState('')
    const [Cadastrar, setcadastro] = useState('')
    const [alertaNome, setalertaNome] = useState('')
    const [alertaData,  setalertaData] = useState('')
    const [alertaImg, setAlertaImg] = useState('')
    const [urlFoto, seturlFoto] = useState('')
    const [foto, setFoto] = useState()
    
    const validar = () =>{
        if(txtNome === ''){
            setalertaNome ("Preencha o nome da pesquisa")
        }
        else if(timeData === ""){
            setalertaNome ("")
            setalertaData ('Preencha a data')
             
        }else{
            //cadastro
        }

    }

    const capiturarIMG = () =>{
        launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
        .then((result) =>{
            seturlFoto(result.assets[0].uri)
            setFoto(result.assets[0])
        })
        .catch((error) =>{
            Alert("algo deu errado")
        })
    }

    const carregarIMG = () =>{
        launchImageLibrary()
        .then((result) =>{
            seturlFoto(result.assets[0].uri)
            setFoto(result.assets[0])
        })
        .catch((error) =>{
            Alert("algo deu errado")
        })
    }


    return(
        <View style={estilo.tela}>
            <View style={estilo.parte1}>
                <View>
                    <Text style={estilo.Texto}>Nome</Text>
                    <TextInput style={estilo.escrita} value={txtNome} onChangeText={setNome} />
                    <Text style={estilo.errou}>{alertaNome}</Text>

                </View>

                <View>
                    <Text style={estilo.Texto}>Data</Text>
                    <TextInput inputMode="numeric" style={estilo.escrita} value={timeData} onChangeText={setData}/>
                    <Text style={estilo.errou}>{alertaData}</Text>
                </View>

                <View>
                    <Botao style={estilo.botao} texto='Capiturar Imagem' funcao={capiturarIMG}/>
                    <Botao style={estilo.botao} texto='Carregar Imagem' funcao={carregarIMG}/>

                    <Image source={{uri : urlFoto}} style={{width: 300 , height: 150, paddingTop: 10}} />
                    
                </View>

            </View>

            <View style={estilo.vacuo}>

            </View>

            <View>
                <Botao style={estilo.botao}  texto='Cadastrar' funcao={validar}/>
            </View>
            
        </View>
    )
}

const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#372775',
        padding: 35,
        flex: 1
    },
    parte1:{
        flex: 0.75,
        justifyContent: "center",
        gap: 5
    },
    Texto:{
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#ffffff'
    },
    escrita:{
        backgroundColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        color: '#3F92C5'

    },
    errou:{
        fontSize: 20,
        color: 'red'
    },
    botao:{
        flex: 0.1,
        justifyContent: 'center',
    },
    vacuo:{
        flex: 0.15
    }
})

export default NovaPesquisa