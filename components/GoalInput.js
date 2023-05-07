import { useState } from "react";
import { Button, StyleSheet, View, TextInput, Modal } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalhandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title="Add Goal" onPress={addGoalhandler} />
          </View>
          <View>
            <Button title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
