import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from '../components/Spacer';

const AuthForm = ({ headertext, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View>
            <Spacer>
                <Text style={styles.headerText}>{headertext}</Text>
            </Spacer>
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                label="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                label="Enter your password"
                value={password}
                onChangeText={setPassword}
            />
            {errorMessage 
            ? <Text style={styles.errorMessage}>{errorMessage}</Text>
            : null
            }
            <Button 
                title={submitButtonText}
                onPress={() => onSubmit({ email, password })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10
    },
    link: {
        marginLeft: 10,
        color: 'blue'
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 15
    }
});

export default withNavigation(AuthForm);