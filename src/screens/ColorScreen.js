import React, {useState} from "react";
import { View, StyleSheet, Button, Text, FlatList, ScrollView } from "react-native";

const ColorScreen = () => {
    let [colors, setColors] = useState([]);

    return(
        <View style={{flex:1}}>
            <Button title="Add random color" onPress={() => setColors([...colors, randomRGB()])}/>
        
            {/* {
                colors.map(item => <View key={item} style={{height: 100, width: 100, backgroundColor: item}}/>)
            } */}

            {/* <ScrollView>
                {
                colors.map(item => <View key={item} style={{height: 100, width: 100, backgroundColor: item}}/>)
                }
            </ScrollView> */}

            <FlatList 
                data={colors}
                keyExtractor = {item => item}
                renderItem= {
                    ({item}) => <View style={{height: 100, width: 100, backgroundColor: item}}></View>
                }
            />
        </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 255);  //min = 0 maxi = 255
    const green = Math.floor(Math.random() * 255); 
    const blue = Math.floor(Math.random() * 255); 
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});
export default ColorScreen;