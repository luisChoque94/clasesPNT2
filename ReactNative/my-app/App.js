import { StatusBar } from "expo-status-bar";
//import { StyleSheet } from 'react-native';
//import { Button } from 'react-native-web';
import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Hola Mundo</Text>
      <Button title="Press me" onPress={() => alert("Button pressed!")} />
      <Text style={styles.count}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  count: {
    fontSize: 16,
    fountWeight: "bold",
  },
});
