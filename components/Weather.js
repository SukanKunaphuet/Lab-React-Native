import React, { useState } from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../7f631e577ed5e5ffbbce726f8ec03489.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        /* flexDirection: 'column',
        justifyContent: 'space-between', */
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
});
