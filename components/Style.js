import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    ingredientList: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    button: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    item: {
        backgroundColor: 'red',
        aspectRatio: 1,
    },
    thumbnail: {
        aspectRatio: 1,
        padding: 5,
    }
 })