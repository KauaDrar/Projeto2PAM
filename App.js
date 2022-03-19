import { StatusBar } from 'expo-status-bar';
import { React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [gas, setGas] = useState();
  const [alc, setAlc] = useState();
  const [escolha, setEscolha] = useState('--');

  function Calcular(){
    let resultado = parseFloat(alc) / parseFloat(gas);
    if(resultado < 0.7){
      setEscolha('Álcool')
    }
    else{
      setEscolha('Gasolina')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GASOLINA x ÁLCOOL</Text>
      <View style={styles.area}>
        <View style={styles.block}>
          <Text style={styles.textBlock}>Gasolina (L)</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gas}
          onChangeText={(text)=>setGas(text)}
          />
        </View>

        <View style={styles.block}>
          <Text style={styles.textBlock}>Álcool (L)</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={alc}
          onChangeText={(text)=>setAlc(text)}
          />
        </View>
      </View>
      

      <TouchableOpacity style={styles.button} onPress = {Calcular}>
        <Text style={styles.textButton}>CALCULAR</Text>
      </TouchableOpacity>
      
      <View style={styles.block}>
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
  text: {
    color: '#a2d6f9',
    fontSize: 30,
    fontWeight: 'bold',
  },
  area: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
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