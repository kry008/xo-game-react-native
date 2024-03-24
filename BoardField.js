import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const BoardField = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 40,
  },
});

export default BoardField;