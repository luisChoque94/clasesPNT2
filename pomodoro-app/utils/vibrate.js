import { Vibration } from "react-native";

export default () => Vibration.vibrate([500, 500, 500]); // Vibrate for 500ms, pause for 500ms, vibrate for 500ms  

const vibratelong = () =>  Vibration.vibrate(1000); // Vibrate for 1 second 

export {vibratelong as vibrateLong}; 