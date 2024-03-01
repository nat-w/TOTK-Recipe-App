import React from 'react';
import {View, FlatList, Button} from 'react-native';
import {styles} from './Style'
import Ingredient from './Ingredient'

const maxIngredients = 5
const dbRecipeTableName = 'recipe'
const dbRecipeIngredientColumns = ''
const ingredientThumbnailPath = '../assets/Ingredients'
const thumbnailExtension = '.png'

const IngredientItem = ({ingredient}) => (
    <View style={styles.item}>
        <Image
        style={styles.thumbnail}
        source={{ uri: ingredient.thumbnailFile }}
      />
        <Text style={styles.title}>{ingredient.name}</Text>
    </View>
  );

const Cook = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({ingredient}) => <IngredientItem ingredient={ingredient} />}
            keyExtractor={ingredient => ingredient.name}
        />
        <Button
            title='Cook'
            onPress={() => navigation.navigate('Cook')}
            style={styles.button}
        />
        <View style={styles.separator} />
        <View  />
        
    </View>
  );
};


export default Cook;