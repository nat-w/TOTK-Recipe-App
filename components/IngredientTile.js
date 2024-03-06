import React, { useState } from 'react';
import { Image, ImageBackground, Pressable } from 'react-native';
import {styles} from './Style'
import icons from '../assets/iconIndex';

const IngredientTile = ({ onPress, baseIngredient }) => {
    const [isSelected, setIsSelected] = useState(false);

    const imageSource = isSelected 
        ? require(icons.ui.cellSelected) 
        : require(icons.ui.cellFilled);
    
    return (
        <Pressable
            style={styles.item}
            onPressIn={() => setIsSelected(!isSelected)}
            onPress={() => onPress(baseIngredient)}
        >
            <ImageBackground 
                style={styles.item}
                source={imageSource}
            >
                <Image
                    style={styles.ingredientThumbnail}
                    source={baseIngredient.thumbnail}
                />
                <Text style={styles.buttonText}>{baseIngredient.name}</Text>
            </ImageBackground>
        </Pressable>
    );
};

export default IngredientTile