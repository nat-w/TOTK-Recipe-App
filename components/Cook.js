import React from 'react';
import {View, FlatList, Image, ImageBackground, Button, Text} from 'react-native';
import {styles} from './Style.js';
import Ingredient from './Ingredient.js';
import Meal from './Meal.js';
import SQLite from 'expo-sqlite';
//const db = SQLite.openDatabase('../database/recipes.db');

const selectedIngredients = [];
const dbIngredientTableName = 'ingredients';
const dbRecipeTableName = 'recipes';

function findAllIngredients() {
    let query = 'SELECT name, category_list, effect from ' + dbIngredientTableName;
    let sqlResults = sendSQLQuery(query);
    
    let ingredientList = [];
    for (row in sqlResults) {
        ingredientList.add(new Ingredient(row['name'], row['category_list'], row['effect']));
    }

    console.log(ingredientList);
    return ingredientList;
}

function findMeal(ingredientList) {
    let sqlSelect = 'SELECT id, name from ' + dbRecipeTableName;
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
    // TODO Multiple meals found => return meal with most ingredients
    else {
        return new Meal(meals[0].id, meals[0].name);
    }
}

function sendSQLQuery(query) {
    let data;
    db.transaction(tx => {
        tx.executeSql(query, [], (tx, results) => {
            if (results.rows.length > 0) {
                data = results.rows;
            }
        });
      });
    
    return data;
}

const imgFile = '../assets/Ingredients/golden_apple.png';
const IngredientItem = ({baseIngredient}) => (
    <View>
        <Image
        style={styles.thumbnail}
        source={baseIngredient.thumbnailFile}
        />
        <Text>{baseIngredient.name}</Text>
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