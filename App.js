import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'task 1', key: '1'},
    { text: 'task 2', key: '2'},
    { text: 'task 3', key: '3'}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    }) 
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop:20,
  },
});
