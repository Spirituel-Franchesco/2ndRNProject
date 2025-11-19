import { View, Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    margin: 0,
    marginBottom: 18,
    // borderWidth: Platform.OS === "android" ? 2 :  4,
    borderWidth:  Platform.select({ ios: 4, android: 2 }),
    borderColor: "white",
    padding: 12,
    borderRadius: 8,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
