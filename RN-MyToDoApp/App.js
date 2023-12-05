import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// Any additional imports
import Task from './components/Task';

export default function App() {
  // Input Area
  const [ task, setTask ] = useState();

  // Storing all tasks
  const [ taskItems, setTaskItems ] = useState();

  // Event listener logic for creating a task
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  // Event listener logic for deleting task
  const completeTask = () => {
    let copyItems = [...taskItems];
    // Remove the specific task as selected by the user
    copyItems.splice(index, 1);
    // Update original array by rewriting it with the copied array
    setTaskItems(copyItems);
  }

  return (
    <View style={styles.container}>
      {/* List all to-do items */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          My To-Do Items
        </Text>

        {/* Container/Wrapper for the tasks to be rendered */}
        <View style={styles.items}>
          {/* <Task text={"Task 1 Test"}/> */}
        </View>
      </View>

      {/* User input for to-do tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.inputLabel}
          placeholder={"Add todo item here"}
          value="task"
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper: {

  },
  sectionTitle: {

  },
  items: {

  },
  writeTaskWrapper: {

  }
});
