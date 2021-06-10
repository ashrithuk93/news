import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { Context as ArticleContext } from '../context/ArticleContext';
import ContentStructure from '../components/ContentStructure';

const ArticleListScreen = ({ navigation }) => {
    const { state, fetchArticle } = useContext(ArticleContext); 

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <NavigationEvents onWillFocus={fetchArticle} />
            <FlatList 
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ArticleDetail', { _id: item._id })}
                        >
                            <ListItem chevron title={item.title} />
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    );
};

// Removes header
ArticleListScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default ArticleListScreen;