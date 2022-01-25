import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
    const [coin, setCoin] = useState(0);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Điểm danh để nhận Tuan Coin</Text>
        <Text style={styles.coin}>{coin}TC</Text>
        <Button
          onPress={() => setCoin(coin + 1)}
          title="Điểm danh"
          color="#841584"
          style={styles.button}
          accessibilityLabel="Điểm danh hàng ngày"
        />
      </View>
    );
}
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      alignContent: 'flex-start',
      fontSize: 20,
      fontWeight: 'bold',
    },
    coin: {
      color: "#841584",
      fontSize: 60,
      fontWeight: 'bold',
    },
    button: {
      
    },
});
  