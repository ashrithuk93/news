import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as ArticleContext } from '../context/ArticleContext';

const CreateStoriesScreen = ({ navigation }) => {
    const { state, addArticle } = useContext(ArticleContext);
    const [addedInfo, setInfo] = useState('');

    const url = navigation.getParam('url');
    const title = navigation.getParam('title');
    const imageUrl = navigation.getParam('imageUrl');
    const story = navigation.getParam('story');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => Linking.openURL(url)}
            >
                <View style={styles.linkTab}>
                    <Image 
                        source={{ uri: imageUrl }}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.linkText}>Tap to view full article</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TextInput 
                style={styles.textInput}
                multiline={true}
                numberOfLines={10}
                placeholder='Write your view'
                value={addedInfo}
                onChangeText={setInfo}
            />
            <Spacer />
            <View>
                <Button 
                    title='Create'
                    onPress={() => addArticle(url, title, imageUrl, addedInfo)}
                />
                <Spacer />
                <Button 
                    title='Cancel'
                    onPress={() => navigation.navigate('Show')}
                />
            </View>
        </View>
    );
};

CreateStoriesScreen.navigationOptions = () => {
    return {
        headers: () => false,
    }
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 5
    },
    textInput: {
        height: 200,
        borderWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    image: {
        height: 80,
        width: 80,
        borderTopLeftRadius: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        paddingLeft: 4
    },
    linkTab: {
        flexDirection: 'row',
        backgroundColor: '#E6E6E6',
        borderTopEndRadius: 5
    },
    linkText: {
        color: 'blue',
        paddingLeft: 4
    }
});

export default CreateStoriesScreen;