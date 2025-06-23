import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Constants from "expo-constants";

//import { vibrate, vibrateLong } from "./utils";

/* IU Components */
import Cronometro from "./components/Cronometro";
import Control from "./components/Control";
import Status from "./components/Status";

/* Hooks*/
import {  CronometroProvider, useCronometro } from "./hooks/useConometro";

//console.log(Constants);
//console.log(Constants.statusBarHeight)


export default function App() {

  //const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.container}>
      <CronometroProvider>  
        <Status />
        <Cronometro />
        <Control />
      </CronometroProvider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //paddingTop: Constants.statusBarHeight, // Add padding to avoid overlap with status bar
  },
  time: {
    fontSize: 40,
    fontWeight: "bold",
  },
  
});
