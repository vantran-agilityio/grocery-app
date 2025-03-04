import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Link href="/(auth)/login">View login</Link>
      <Link href="/(auth)/signup">View signup</Link>
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
