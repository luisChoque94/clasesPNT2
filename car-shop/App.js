import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Vehiculo from "./components/Vehiculo";
import { useVehiculos, VehiculosProvider } from "./hooks/useVehiculos";
import ListadoVehiculos from "./Screens/ListadoVehiculos";

export default function App() {
  return (
    <VehiculosProvider>
      <View style={styles.container}>
        <ListadoVehiculos />
        <StatusBar style="auto" />
      </View>
      </VehiculosProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
  },
});
