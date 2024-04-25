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
  ActivityIndicator
} from "react-native";
import { useState } from "react";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator size="small"/>
      <ActivityIndicator size="large" color="midnightblue"/>
    </View>
  );
}
