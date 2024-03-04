import React from 'react';
import {View, FlatList, Image, ImageBackground, Button, Text} from 'react-native';
import {styles} from './Style.js';
import Ingredient from './Ingredient.js';
import Meal from './Meal.js';
import * as SQLite from 'expo-sqlite';

const selectedIngredients = [];
const dbIngredientTableName = 'ingredients';
const dbRecipeTableName = 'recipes';

export const getDBConnection = async () => {
    return SQLite.openDatabase('recipes.db');
}

export const sendSQLQuery = async (query) => {
    let data;
    await db.transaction(async tx => {
        await tx.executeSql(query, [], (tx, results) => {
            if (results.rows.length > 0) {
                data = results.rows;
            }
        });
    });

    return data;
}

function findAllIngredients() {
    let query = 'SELECT name, category_list, effect from ' + dbIngredientTableName;
    let sqlResults = sendSQLQuery(query);
    
    let ingredientList = [];
    for (row in sqlResults) {
        ingredientList.add({ingredient: new Ingredient(row['name'], row['category_list'], row['effect'])});
    }

    console.log(ingredientList);
    return ingredientList;
}

function findMeal(ingredientList) {
    let sqlSelect = 'SELECT id, name, exclude from ' + dbRecipeTableName;
    let sqlWhere = '';

    for (ingredient in ingredientList) {
        sqlWhere += ingredient.makeSQLQueryForIngredient() + ' UNION ';
    }

    let query = sqlSelect + sqlWhere;
    let meals = sendSQLQuery(query);

    // No meals found => dubious food
    if (meals == null || meals.length == 0) {
        return new Meal(145, 'Dubious Food');
    }
    // One meal found => return it
    else if (meals.length == 1) {
        return new Meal(meals[0].id, meals[0].name);
    }
    // TODO Multiple meals found => return meal with unique ingredients
    else {
        return new Meal(meals[0].id, meals[0].name);
    }
}

const IngredientItem = ({baseIngredient}) => (
    <View>
        <Image
        style={styles.thumbnail}
        source={baseIngredient.ingredient.thumbnailFile}
        />
        <Text>{baseIngredient.ingredient.name}</Text>
    </View>
  );

  let apple = new Ingredient('apple', 'fruit', '', false);
  let goldenApple = new Ingredient('golden apple', 'fruit', '', false);
const DATA = [
{
    ing: apple,
},
{
    ing: goldenApple,
},
];

const Cook = () => {
  return (
    <View >
        <View>
            <FlatList
                data={DATA}
                renderItem={({item}) => <IngredientItem baseIngredient={item.ing} />}
                keyExtractor={item => item.ing.name}
            />
        </View>
    </View>
  );
};


export default Cook;