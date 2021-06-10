import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
    const { state, signout } = useContext(AuthContext);

    //console.log(state.user);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>Account Information: {state.token}</Text>
            <Spacer>
                <Button 
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({});

export default AccountScreen;

