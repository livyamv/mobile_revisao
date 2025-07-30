import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CardUser({ name, email, company, zipcode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Nome: {name}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Empresa: {company}</Text>
      <Text style={styles.info}>CEP: {zipcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2e2ffff",
    marginVertical: 12,
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  name: {
    fontWeight: "700",
    fontSize: 18,
    color: "#333333",
    marginBottom: 8,
  },
  info: {
    fontSize: 15,
    color: "#4f4f4f",
    marginBottom: 6,
  },
});
export default CardUser;
