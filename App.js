import {View, Text, StyleSheet} from 'react-native'

export default function App(){
  return (
    <View style={styles.container}>
    <View style={styles.lightGreenBox}>
      <Text>
      Light blue
      </Text>
    </View>
    <View style={styles.lightBlueBox}>
      <Text>
      leght blue
      </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:"lightyellow", padding: 60},
  lightBlueBox: {
    backgroundColor:"lightblue",
    width:100,
    height:100,
    padding:10
  },
  lightGreenBox: {
    backgroundColor:"lightgreen",
    width:100,
    height:100,
    padding:10
  },
})