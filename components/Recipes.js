import React from 'react';
import {Text} from 'react-native';
import {styles} from './Style'

const Recipes = () => {
    // Helper function to render items in flat list
    const renderIngredient = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
            item={item}
            onPress={() => setSelectedIngredient(ingredient)}
            backgroundColor={backgroundColor}
            textColor={color}
            />
        );
    };
  
    return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderIngredient}
            keyExtractor={item => item.id}
            extraData={selectedId}
        />
    </SafeAreaView>
  );
};

export default Recipes;