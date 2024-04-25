import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Click me " onPress={()=> console.log("button presed")} color="midnightblue" disabled/>
    </View>
  );
}
