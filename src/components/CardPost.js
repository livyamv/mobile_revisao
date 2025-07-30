import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CardPost({ title, body, author }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>por {author}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

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
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  author: {
    fontStyle: 'italic',
    color: '#8a6d3b',
    marginBottom: 8,
    fontSize: 14,
  },
  body: {
    fontSize: 15,
    color: '#4f4f4f',
    lineHeight: 22,
  },
});

export default CardPost;
