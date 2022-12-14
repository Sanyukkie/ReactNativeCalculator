import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';



export default function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [total, setTotal] = useState(0);
 

  const addition = () => {
    setTotal(parseInt(num1)+parseInt(num2))
  }

  const substraction = () => {
    setTotal(parseInt(num1)-parseInt(num2))
  }

  return (
    <View style={styles.container}>

      <Text>Result: {total}</Text>
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num1 => setNum1(num1)}
        value={num1}
        numeric
        keyboardType={'numeric'}
      />
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num2 => setNum2(num2)}
        value={num2}
        numeric
        keyboardType={'numeric'}
      />

      <View style={styles.button_row}>
        <Button onPress={addition} title="+" />
        <Button onPress={substraction} title="-" />
      </View>
      
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
  button_row: {
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
