import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert
} from "react-native";
import { useState } from "react";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Click Me" onPress={()=> Alert.alert("invalid ")}/>
      <Button title="Click Me2" onPress={()=> Alert.alert("invalid ", 'hwllo', [
        {
          text: 'on press',
          onPress: ()=> console.log("aletaljkdsh")
        },
        {
          text: 'ons',
          onPress: ()=> console.log("aletasedfjkdsh")
        },
      ])}/>
    </View>
  );
}
