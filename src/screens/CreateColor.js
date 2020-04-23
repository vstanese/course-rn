import React, {useState} from "react";
import { View, StyleSheet, Button, Text, FlatList, ScrollView } from "react-native";
import ColorSample from './ColorSample';

const CreateColor = () => {
    const COLOR_INCREMENT = 15;

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [renderedColor, setRenderedColor] = useState(`rgb(${red},${green},${blue})`);


    console.log(red);
    return(
        <View>
            <ColorSample 
                onIncrease={() => { setRed(red + COLOR_INCREMENT)}} 
                onDecrease={() => { setRed(red - COLOR_INCREMENT)}} 
                title="Red" />
            <ColorSample 
                onIncrease={() => { setGreen(green + COLOR_INCREMENT)}} 
                onDecrease={() => { setGreen(green - COLOR_INCREMENT)}} 
                title="Green"/>
            <ColorSample 
                onIncrease={() => { setBlue(blue + COLOR_INCREMENT)}} 
                onDecrease={() => { setBlue(blue - COLOR_INCREMENT)}} 
                title="Blue"/>
            <View style={{marginTop:10, height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`, alignSelf:"center"}}/>
        </View>
    );
}

const styles = StyleSheet.create({});
export default CreateColor;