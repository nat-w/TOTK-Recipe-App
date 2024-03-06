import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import {styles} from './Style'
import icons from '../assets/iconIndex';

const CustomButton = ({ onPress, title }) => {
    const [isPressed, setIsPressed] = useState(false);

    const imageSource = isPressed 
        ? require(icons.ui.buttonPressed) 
        : require(icons.ui.button);
    
    return (
        <Pressable
            style={styles.button}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={onPress}
        >
            <Image
                style={styles.buttonImage}
                source={imageSource}
            />
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

export default CustomButton