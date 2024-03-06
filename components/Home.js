import React from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from './Style'
import icons from '../assets/iconIndex';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={icons.ui.titleBackground} resizeMode="cover" style={styles.titleImage}>
                <Text style={styles.title}>TOTK Recipes</Text>
                <Button
                    title='Cook'
                    onPress={() => navigation.navigate('Cook')}
                    style={styles.button}
                />
            </ImageBackground>
        </View>
    );
};

export default Home;