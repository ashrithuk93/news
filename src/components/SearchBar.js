import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.icon} />
            <TextInput 
                placeholder="Search"
                style={styles.input}
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => onTermSubmit(term)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        flexDirection: 'row'
    },
    input: {
        height: 40,
        flex: 1,
        marginLeft: 5
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default SearchBar;