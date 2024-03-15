import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>This is the Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'lightgray',
        padding: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default Footer;
