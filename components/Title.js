import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    margin: 24,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    borderRadius: 8,
  },
});

export default Title;
