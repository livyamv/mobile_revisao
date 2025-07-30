import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CardTodos = ({ todo, user, onToggle }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Checkbox
          style={styles.checkbox}
          value={todo.completed}
          onValueChange={onToggle}
          color={todo.completed ? '#89b98bff' : undefined}
        />
        <Text style={styles.title}>{todo.title}</Text>
      </View>
      <Text style={styles.user}>Atribuído a: {user ? user.name : 'Carregando...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2e2ffff',
    marginVertical: 12,
    padding: 18,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 12,
    width: 20,
    height: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333333',
    flex: 1,
    flexWrap: 'wrap',
  },
  user: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#8a6d3b',
  },
});

export default CardTodos;
