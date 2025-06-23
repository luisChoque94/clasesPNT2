import { StyleSheet, View, Button } from "react-native";
import { useCronometro } from "../../hooks/useConometro";


export default function Control() {

    const { isRunning, setIsRunning } = useCronometro();
  return (
    <View style={styles.buttonContainer}>
      <Button title={isRunning ? "Pausar" : "Iniciar"} onPress={() => setIsRunning(!isRunning)}/>
      <Button title="Reiniciar" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
});
