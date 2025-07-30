import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CardPost from "../components/CardPost";
import sheets from "../services/axios";
import Header from "../components/Header";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const postsResponse = await sheets.getPosts();
        const usersResponse = await sheets.getUsers();

        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Desconhecido";
  };

  return (
    <View style={styles.container}>
      <Header/>
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
  },
});
export default Posts;