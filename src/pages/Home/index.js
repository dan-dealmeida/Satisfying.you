import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';

const windowWidth = Dimensions.get('window').width;
const windowHeith = Dimensions.get('window').height;

const Home = () => {
  const [txtPesquisa, setPesquisa] = useState('Insira o termo de busca...');

  return (
    <View style={estilos.view}>

      <View style={estilos.header}>
        <Header />
      </View>

      <View style={estilos.pesquisa}>
        <TextInput
          value={txtPesquisa}
          onChangeText={setPesquisa}
          style={{backgroundColor: 'white'}}
        />
      </View>

      <View style={{height: windowHeith * 0.8}}>
        <ScrollView>
          <Card texto="teste0" data={'23/03/2023'} />
          <Card texto={'teste1'} data={'23/03/2023'} />
          <Card texto={'teste2'} data={'23/03/2023'} />
          <Card texto={'teste3'} data={'23/03/2023'} />
          <Card texto={'teste4'} data={'23/03/2023'} />
        </ScrollView>
      </View>

      <View style={estilos.viewBotao}>
        <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.botaoText}>Nova Pesquisa</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const estilos = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  header: {
    backgroundColor: '#2B1D62',
    height: windowWidth * 0.12,
  },
  pesquisa: {
    padding: 0.1,
    marginLeft: windowWidth * 0.1,
    marginRight: windowWidth * 0.1,
  },
  viewBotao: {
    height: windowHeith * 0.2,
    padding: 10,
  },
  botao: {
    backgroundColor: '#37BD6D',
    alignItems: 'center',
  },
  botaoText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'Averia Libre',
  },
});
export default Home;
