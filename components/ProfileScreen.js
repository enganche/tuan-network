import React from "react";
import { Text, View } from 'react-native';

export default function ProfileScreen(props) {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>Tài khoản</Text>
            <Text>{props.name}</Text>
            <Text>Số coin: {props.coins}</Text>
        </View>
    );
}