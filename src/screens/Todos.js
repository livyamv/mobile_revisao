import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import sheets from "../services/axios";
import CardTodos from "../components/CardTodo";
import Header from "../components/Header";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const todosResponse = await sheets.getTodos();
        const usersResponse = await sheets.getUsers();

        setTodos(todosResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Todos" />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const user = users.find((u) => u.id === item.userId);

          return (
            <CardTodos todo={item} user={user} onToggle={() => handleToggle(item.id)} />
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
    backgroundColor: "#f7ecfbff",
  },
});

export default Todos;
