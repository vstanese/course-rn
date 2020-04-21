import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ListsScreen = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.title}>Lists Screen Demo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default ListsScreen;
