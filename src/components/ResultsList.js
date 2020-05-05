import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"

const ResultsList = ({ title, navigation, results }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList horizontal data={results} keyExtractor={(result) => result.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <Text>{item.name}    </Text>
                    </TouchableOpacity>
                )
            }}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ResultsList