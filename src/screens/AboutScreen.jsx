import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({}) => {
  return (
    <MainLayout>
      <View style={styles.conainer}>
        <Text>To Do List App</Text>
        <Text>Written by: Chan Li</Text>
        <Text>Date: March 14, 2024</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  body: {
    fontSize: 16
  }
})

export default AboutScreen;