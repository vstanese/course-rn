import React, {useState} from "react";
import { View, StyleSheet, Button, Text, FlatList, ScrollView } from "react-native";

const ColorSample = ({title, onIncrease, onDecrease}) => {

    return(
        <View>
            <Text>{title}</Text>
            <Button onPress={() => onIncrease()} title={'Increment ' + title}></Button>
            <Button onPress={() => onDecrease()} title={'Decrement ' + title}></Button>
        </View>
    );
}

const styles = StyleSheet.create({});
export default ColorSample;
    ;