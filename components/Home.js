import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {styles} from './Style'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title='Cook'
                onPress={() => navigation.navigate('Cook')}
                style={styles.button}
            />
            <Button
                title='Recipe List'
                onPress={() => navigation.navigate('Recipes')}
                style={styles.button}
            />
        </View>
    );
};

export default Home;