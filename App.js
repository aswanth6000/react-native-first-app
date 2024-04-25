import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModal, setIsModal] = useState(false);
  function handleOnclick() {
    setIsModal(!isModal);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Click me "
        onPress={() => setIsModal(true)}
        color="midnightblue"
      />
      <Modal visible={isModal} onRequestClose={()=> setIsModal(false)} animationType="slide" presentationStyle="formSheet">
        <Text>Modal Content</Text>
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Button
            title="Click me "
            onPress={() => setIsModal(false)}
            color="midnightblue"
          />
        </View>
      </Modal>
    </View>
  );
}
