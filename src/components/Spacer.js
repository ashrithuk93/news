import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SigninScreen = ({ children }) => {
    return <View style={styles.text}>{children}</View>
};

const styles = StyleSheet.create({
    text: {
        marginBottom: 15
    }
});

export default SigninScreen;