import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageContainer from './components/PageContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PageContainer>
      <Text>hello up App.js to start working on your app!</Text>
      </PageContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
