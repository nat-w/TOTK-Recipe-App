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
const UIImagePath = '../assets/UI/'
const ingredientThumbnailPath = '../assets/Ingredients'
const thumbnailExtension = '.png'

function openDatabase() {
    const db = SQLite.openDatabase(dbName);
    return db;
}

const db = openDatabase();

function findAllIngredients() {
    let query = 'SELECT name, category_list, effect from ' + dbIngredientTableName;
    let ingredients = sendSQLQuery(query);
    
    return ingredients.foreach(x => new Ingredient(x['name'], x['category_list'], x['effect']));
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


const IngredientItem = ({ingredient}) => (
    <View style={styles.item}>
        <Pressable onPress={() => {ingredient.selected = !ingredient.selected}}>
            <ImageBackground source={{uri:UIImagePath + 'cell_filled.png'}} resizeMode="cover" style={styles.image}>
                <Image style={styles.thumbnail} source={{uri: ingredient.thumbnailFile}} />
                <Text style={styles.title}>{ingredient.name}</Text>
            </ImageBackground>
        </Pressable>
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
    </View>
  );
};


export default Cook;