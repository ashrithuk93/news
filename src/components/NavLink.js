import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
        >
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        marginLeft: 10,
        color: 'blue'
    }
});

export default withNavigation(NavLink);

