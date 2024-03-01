import React from 'react';
import {View, FlatList, Button} from 'react-native';
import {styles} from './Style';
import Ingredient from './Ingredient';
import Meal from './Meal';
import * as SQLite from "expo-sqlite";

const maxIngredients = 5
const dbName = ''
const dbIngredientTableName = 'recipe'
const dbRecipeTableName = 'recipe'
const dbRecipeIngredientColumns = ''
const ingredientThumbnailPath = '../assets/Ingredients'
const thumbnailExtension = '.png'

function openDatabase() {
    const db = SQLite.openDatabase(dbName);
    return db;
}

const db = openDatabase();

function findAllIngredients() {
    useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT name, category_list from ' + dbIngredientTableName,
            [doneHeading ? 1 : 0],
            (_, { rows: { _array } }) => setItems(_array)
          );
        });
      }, []);

    let ingredients;
    return ingredients;
}

function makeSQLQueryForMeal(ingredientList) {
    let sqlSelect = 'SELECT id, name from ' + dbRecipeTableName;
    let sqlWhere = '';

    for (ingredient in ingredientList) {
        sqlWhere += " UNION " + ingredient.makeSQLQueryForIngredient();
    }

    // Connect to db and send sql command

    let results;
    let finalMeal = new Meal();

    return finalMeal;
}

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
            data={findAllIngredients()}
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