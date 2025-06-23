import Vehiculo from "../Vehiculo";
import { ScrollView } from "react-native";

export default function VehiculoScrollView({vehiculos}) {
  return (
    <ScrollView>
      {vehiculos.map((vehiculo) => (
        <Vehiculo key={vehiculo.id} vehiculo={vehiculo} />
      ))}
    </ScrollView>
  );
}
