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
import Greet from "./components/Greet";
import { useState } from "react";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name={"kona"}/>
    </View>
  );
}
