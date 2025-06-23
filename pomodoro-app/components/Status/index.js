import { View, Text, StyleSheet } from "react-native";
import { useCronometro } from "../../hooks/useConometro";

export default function Status() {
  const { isWorking } = useCronometro();

  return (
    <View>
      <Text style={styles.title}>
        {isWorking ? "Tiempo de Trabajo" : "Tiempo de Descanso"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginTop: 10,
    paddingBottom: 20,
  },
});
