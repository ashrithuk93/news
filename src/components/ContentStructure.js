import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ReactPane from './ReactPane';

const ContentStructure = ({ article }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: article.urlToImage }} />
            <Text style={styles.text}>{article.title}</Text>
            <Text style={styles.content}>{article.content}</Text>
            <ReactPane />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 16,

        elevation: 24
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5
    },
    image: {
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    content: {
        fontSize: 14,
        padding: 5
    }
});

export default ContentStructure;