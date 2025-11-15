import { StyleSheet, View, Text } from "react-native";

import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
      {/* Guess  */}
      <View>
        <Text>Higher or lower ?</Text>
        {/* + - */}
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // Add your styles here
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
