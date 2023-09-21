import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const FriendsSearchBar = () => {
  const [text, setText] = React.useState('Search for friends');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder="Search for Friends"
        placeholderTextColor="#fff" 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
  },
});


export default FriendsSearchBar;