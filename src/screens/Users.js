import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import sheets from "../services/axios";
import CardUser from "../components/CardUser";
import Header from "../components/Header";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await sheets.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Users" />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardUser
            name={item.name}
            email={item.email}
            company={item.company?.name}
            zipcode={item.address?.zipcode}
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
    backgroundColor: "#f7ecfbff",
  },
});

export default Users;
