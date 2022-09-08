import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('...')


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        
        onChangeText={(text)=>{
          setText(text)
        }}
        value ={text}
      /> 
      <Button
        title='Click me!'
        onPress={()=>{
          setResult(text)
        }}
       
      />
       <Text> 
          Kết Quả:  {result}
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 60,
    textAlign: 'center',
    backgroundColor: 'azure',
    fontSize: 20,
    borderColor: 'red',
 },
});
