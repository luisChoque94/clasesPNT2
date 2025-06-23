import { View, Text } from "react-native";
import styles from "./styles";
import constants from "./constants";
import { useEffect, useState } from "react";
import useCronometro from "../hooks/useCronometro";

const minToSec = (minutes) => minutes * 60;
const paddZero = (num) => (num < 10 ? `0${num}` : num);

export default function Cronometro() {
  const [remainingTime, setRemainingTime] = useState(minToSec(constants.WORKING_TIME));
  const [isRunning, setIsRunning] = useCronometro()


  useEffect(() => {
    console.log(isRunning)
  }, [isRunning]);

  const mins = Math.floor(remainingTime / 60);
  const secs = Math.floor(remainingTime % 60);


  return (
    <View>
      <Text style={styles.time}>
        {paddZero(mins)}:{paddZero(secs)}
      </Text>
    </View>
  );
}
