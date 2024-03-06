import React, { useState } from 'react';
import { Image, ImageBackground } from 'react-native';
import {styles} from './Style'
import icons from '../assets/iconIndex';

const MealView = ({ meal }) => (
    <View>
        {meal != null ?
            <ImageBackground
        style={styles.shine}
        source={icons.ui.shine}
        >
            <Image
            style={styles.mealThumbnail}
            source={meal.thumbnail}
            />
            <Text>{meal.name}</Text>
        </ImageBackground>
        : null}

        
    </View>
);

export default MealView