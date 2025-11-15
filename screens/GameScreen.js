import { StyleSheet, View, Text } from "react-native";

function GameScreen() {
  return (
    <View style={styles.exampleStyle}>
      <Text>Opponent's Guess</Text>
      Guess 
      <View>
        <Text>Higher or lower ?</Text>+ -
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleStyle: {
    // Add your styles here
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
