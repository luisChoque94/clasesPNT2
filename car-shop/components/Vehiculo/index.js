import { Card } from "@rneui/themed";
import { useEffect } from "react";
import { Image, View, Text } from "react-native";

export default function Vehiculo({vehiculo}) {
 

  //Puedo capturar el vehiculo en el momento que esta desmontado
  // useEffect(() => {
  //   // Aquí podrías agregar lógica adicional si es necesario
  //   console.log("Vehiculo cargado.", vehiculo.id);

  //   return () => {
  //     console.log("Vehiculo eliminado.", vehiculo.id);
  //   }
  // }, []);

  return (
    <View>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>{vehiculo.marca}, {vehiculo.modelo}</Card.Title>
        <Card.Divider />
        <View style={{ position: "relative", alignItems: "center" }}>
          <Image
            source={{ uri: vehiculo.urlImagen }}
            resizeMode="contain"
            style={{ width: "100%", height: 100 }}
          />
          <Text> Marca: {vehiculo.marca}</Text>
          <Text> Modelo: {vehiculo.modelo}</Text>
          <Text> Precio: {vehiculo.precio}</Text>
          <Text> Año: {vehiculo.anio}</Text>
        </View>
      </Card>
    </View>
  );
}
