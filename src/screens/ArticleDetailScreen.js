import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as ArticleContext } from '../context/ArticleContext';

const ArticleDetailScreen = ({ navigation }) => {
    const { state } = useContext(ArticleContext);
    const _id = navigation.getParam('_id');

    const article = state.find(a => a._id === _id);

    return (
        <View>
            <Text>Article Id: { _id }</Text>
            <Text>Article: { article.addedInfo }</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ArticleDetailScreen;