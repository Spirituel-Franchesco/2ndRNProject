import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    // Add logic to handle the confirmation of the entered number
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Show some alert or error message
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      console.log("Invalid number entered");
      return;
    }
    console.log("Valid number entered:", chosenNumber);
    // Proceed with the valid number (e.g., start the game)
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
    console.log("Input reset");
  }

  return (
    <View style={styles.PrimaryButtoncontainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PrimaryButtoncontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    display: "flex",
    gap: 20,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    overflow: "hidden",
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 20,
  },
});

export default StartGameScreen;
