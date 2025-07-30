import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import api from '../services/axios';
import CardTodos from '../components/CardTodo';
import Header from '../components/Header';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/todos').then(response => setTodos(response.data));
    api.get('/users').then(response => setUsers(response.data));
  }, []);

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Todos" />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          const user = users.find(u => u.id === item.userId);

          return (
            <CardTodos
              todo={item}
              user={user}
              onToggle={() => handleToggle(item.id)}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7ecfbff',
  },
});

export default Todos;
