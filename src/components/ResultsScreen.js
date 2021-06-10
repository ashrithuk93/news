import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ContentStructure from './ContentStructure';
import { withNavigation } from 'react-navigation';

const ResultsScreen = ({ navigation, result }) => {
    
    return (
        <View>
            <Text>{result.title}</Text>
            <FlatList 
                data={result}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('storiesFlow', 
                            { 
                                url: item.url,
                                title: item.title,
                                imageUrl: item.urlToImage,
                                story: item.content
                            })}
                        >
                            <ContentStructure article={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default withNavigation(ResultsScreen);