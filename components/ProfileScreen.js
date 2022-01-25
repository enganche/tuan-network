import React from "react";
import { Text, View } from 'react-native';

export default function ProfileScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text>Tài khoản</Text>
            <Text>Nguyen Anh Tuan</Text>
            <Text>Số coin: 0</Text>
        </View>
    );
}