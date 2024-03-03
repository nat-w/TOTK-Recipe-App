import React from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from './Style'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title='Cook'
                onPress={() => navigation.navigate('Cook')}
                style={styles.button}
            />
        </View>
    );
};

export default Home;