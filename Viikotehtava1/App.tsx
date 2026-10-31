import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  // console.log("age: "+age)
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lowerLimit =  (220 - ageAsNumber) * 0.65
  const upperLimit = (220 - ageAsNumber) * 0.85
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        keyboardType='number-pad'
        value={age}
        onChangeText={setAge}
      />
      <Text>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',   
    paddingBottom: 40,
  }
});
