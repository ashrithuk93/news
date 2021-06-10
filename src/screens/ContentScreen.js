import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import useResults from '../hooks/useResults';
import ResultsScreen from '../components/ResultsScreen';
import SearchBar from '../components/SearchBar';

const ContentScreen = () => {
    const [term, setTerm] = useState(''); 
    const [results, errorMessage, searchApi] = useResults();
    
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={ () => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultsScreen 
                result={results}
            />
        </SafeAreaView>
    );
};

ContentScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({});

export default ContentScreen;