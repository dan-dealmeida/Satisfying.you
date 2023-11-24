import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Botao = props => {
  const texto = props.texto;

  return (
    <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
      <Text style={estilos.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    backgroundColor: 'pink',
  },
  texto: {
    fontSize: 36,
    color: 'gray',
  },
});
export default Botao;
