import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import api from '../services/axios';
import CardPost from '../components/CardPost';
import Header from '../components/Header';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/posts').then((res) => setPosts(res.data));
    api.get('/users').then((res) => setUsers(res.data));
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <View style={styles.container}>
      <Header title="Posts" />
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
    padding: 10,
    backgroundColor: '#f7ecfbff',
  },
});

export default Posts;
