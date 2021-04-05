import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "./components/Task.js";



export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleTask = () => {
    if (task !== "") {
      Keyboard.dismiss();
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    let itemCopy = [...taskList];
    itemCopy.splice(index, 1);
    setTaskList(itemCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>

      {/*write a task*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder="Write a task"
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
          <TouchableOpacity onPress={() => handleTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>




        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <ScrollView>
          <View style={styles.items}>
            {/*all items*/}
            {taskList.map((taskText, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={taskText} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2E4A",
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  items: {
    marginTop: 10,
    marginBottom: 50,
  },
  writeTaskWrapper: {
    // position: "absolute",
    // bottom: -100,
    // left: 20,
    // marginBottom: 20,
    marginTop: 10,
    marginBottom: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#E84545",
    borderRadius: 60,
    borderColor: "#E84545",
    borderWidth: 1,
    width: 250,
    color: "white",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#E84545",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E84545",
    borderWidth: 1,
  },
  addText: {
    // fontWeight: "bold",
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
