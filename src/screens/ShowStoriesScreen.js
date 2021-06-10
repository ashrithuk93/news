import React from 'react';
import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const ShowStoriesScreen = ({ navigation }) => {
    const url = navigation.getParam('url');
    const title = navigation.getParam('title');
    const imageUrl = navigation.getParam('imageUrl');
    const story = navigation.getParam('story');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.story}>{story}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
                <Text style={styles.link}>Follow this link for the full article</Text>
            </TouchableOpacity>
            <Button 
                title='Write your view'
                onPress={() => navigation.navigate('Create', {
                    url, 
                    title,
                    imageUrl,
                    story
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        overflow: "scroll"
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    image: {
        height: 300,
        marginBottom: 5
    },
    story: {
        fontSize: 16
    },
    link: {
        color: 'blue',
        fontSize: 16,
        backgroundColor: '#F0EEEF',
        borderRadius: 2,
        marginVertical: 10
    }
});

export default ShowStoriesScreen;