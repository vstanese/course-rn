import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const UseStateScreen = () => {
    let [counter, setCounter] = useState(0);
    // 0 default value
    // counter -> variable to modify
    // setCounter -> setter for that variable

    return(
        <View style={styles.viewStyle}>
            <Button 
            style={styles.elements} 
            title="Increase" 
            onPress={() => setCounter(counter++)}
            />
            <Button 
            style={styles.elements}
             title="Decrease" 
             onPress={() => setCounter(counter--)}
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
export default UseStateScreen;