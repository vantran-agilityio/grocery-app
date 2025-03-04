import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function RootScreen() {
  return (
    <View style={styles.container}>
      <Text>LANDING</Text>
      <Link href="/(auth)">View welcome</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
