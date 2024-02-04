import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default ToDoForm;
