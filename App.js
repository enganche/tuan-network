import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
