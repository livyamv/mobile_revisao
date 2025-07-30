import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    backgroundColor: '#e6d6f2',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d1b3e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#552b73',
  },
});

export default Header;
