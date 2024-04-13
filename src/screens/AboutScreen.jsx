import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [message, setMessage] = React.useState('');

  const apiCall = async () => {
    const response = await fetch("http://10.0.2.2:3333/fact", {
      method: "GET"
    });
    const json = await response.json();
    const { fact } = json;
    setMessage(fact);
  }

  React.useEffect(() => {
    apiCall().then(() => {
      /* Called when the api call finishes */
    });
  }, []);
  
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>To Do List App</Text>
        <Text style={styles.body}>Written by: Chan Li</Text>
        <Text style={styles.body}>Date: March 14, 2024</Text>
        <Text style={styles.body}>Fact: {message}</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18
  },
  body: {
    fontSize: 16
  }
})

export default AboutScreen;
