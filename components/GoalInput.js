import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";

function GoalInput() {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Your course goal!!"
      onChangeText={goalInputHandler}
    />
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
