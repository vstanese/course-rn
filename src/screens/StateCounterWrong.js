import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    let counter = 0;

    return(
        <View style={styles.viewStyle}>
            <Button style={styles.elements} 
            title="Increase"
            onPress={() => {counter++; console.log(counter)}}
            />
            <Button 
            style={styles.elements} 
            title="Decrease"
            onPress={() => {counter--; console.log(counter)}}
            />
            <Text style={styles.elements}>Current count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: "center",
    },
    elements: {
        marginTop:20
    }
});
export default CounterScreen;