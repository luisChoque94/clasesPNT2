import Vehiculo from "../Vehiculo";
import { FlatList    } from "react-native";

const renderItem = ({ item }) => <Vehiculo vehiculo={item} />;  //Si o si se llama item, no se puede cambiar el nombre

export default function VehiculoFlatList({vehiculos}) {
  return (
    <FlatList
    data = {vehiculos}
    renderItem = {renderItem}
    keyExtractor={(item) => item.id.toString()}
    />
);
}
