import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import api from '../services/axios';
import CardPost from '../components/CardPost';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Buscar os posts
    api.get('/posts').then((res) => setPosts(res.data));

    // Buscar os usuários (para pegar o nome pelo userId)
    api.get('/users').then((res) => setUsers(res.data));
  }, []);

  // Função para buscar nome do usuário
  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPost
            title={item.title}
            body={item.body}
            author={getAuthorName(item.userId)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f7ecfbff',
  },
});
export default Posts;