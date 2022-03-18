import { StatusBar } from 'expo-status-bar';
import { React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [gas, setgas] = useState();
  const [alc, setalc] = useState();
  const [escolha, setescolha] = useState('--');

  function Calcular(){
    let resultado = parseFloat(alc) / parseFloat(gas);  
    if(resultado < 0.7){
      setResultado = '';
    }
  console.log(escolha);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GASOLINA x ÁLCOOL</Text>
      <View style={styles.blocoUm}>
        <View style={styles.bloco}>
          <Text style={styles.textBlock}>Gasolina (L)</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gas}
          onChangeText={(texto)=>setgas(texto)}
          />
        </View>

        <View style={styles.bloco}>
          <Text style={styles.textBlock}>Álcool (L)</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={alc}
          onChangeText={(texto)=>setalc(texto)}
          />
        </View>
      </View>
      

      <TouchableOpacity style={styles.button} onPress = {Calcular}>
        <Text style={styles.textButton}>CALCULAR</Text>
      </TouchableOpacity>
      
      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Abasteça com {escolha}</Text>
      </View>
    </View>
        );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00509D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#a2d6f9',
    fontSize: 30,
    fontWeight: 'bold',
  },
  blocoUm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloco: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
  },
  input: {
    borderColor: '#a2d6f9',
    borderWidth: 2,
    fontSize: 30,
    width: 150,
    height: 60,
    color: '#a2d6f9',
  },
  textBlock: {
    color: '#FFD500',
    fontSize: 26,
  },
  operacoes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    flexDirection: 'row'
  },
  button: {
    margin: 5,
    textAlign: 'center',
    backgroundColor: '#003F88',
    borderRadius: 5,
    width: 220
  },
  textButton: {
    color: '#FFD500',
    fontSize: 40,
  },
});