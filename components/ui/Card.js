import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

export default Card;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    marginTop: deviceWidth < 380 ? 8 : 25,
    marginHorizontal: deviceWidth < 380 ? 12 : 20,
    borderRadius: deviceWidth < 380 ? 20 : 10,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    display: "flex",
    gap: 20,
  },
});
