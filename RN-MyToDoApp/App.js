import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// Any additional imports
import Task from './components/Task';

export default function App() {
  // Input Area
  const [task, setTask] = useState();

  // Storing all tasks
  const [taskItems, setTaskItems] = useState([]);

  // Event listener logic for creating a task
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  // Event listener logic for deleting task
  const completeTask = (index) => {
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
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>

      {/* User input for to-do tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add todo item here"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
            {/* <Image source={require('./assets')}></Image> */}
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8ED',
  },
  taskWrapper: {  
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor:"#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addText:{

  }
  
});
