import React from 'react';
import {View, FlatList, Image, ImageBackground, Button, Text} from 'react-native';
import {styles} from './Style.js';
import Ingredient from './Ingredient.js';
import Meal from './Meal.js';
import CustomButton from './CustomButton.js';
import { sendSQLQuery } from '../database/GetDBData.js';
import MealView from './MealView.js';

const selectedIngredients = [];
let currentMeal;

function findAllIngredients() {
    let query = 'SELECT name, category_list, effect from ingredients;';
    let sqlResults = sendSQLQuery(query);
    
    let ingredientList = [];
    for (row in sqlResults) {
        ingredientList.add({ingredient: new Ingredient(row['name'], row['category_list'], row['effect'])});
    }

    return ingredientList;
}

function findMeal(ingredientList) {
    let sqlSelect = 'SELECT id, name, exclude from recipes;';
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
    // TODO Multiple meals found => return meal with excluded or unique ingredients
    else {
        let unique = false;
        return new Meal(meals[0].id, meals[0].name);
    }
}

function onPressIngredient(ingredient) {
    // Toggle ingredient select state
    ingredient.selected = !ingredient.selected;

    if (ingredient.selected) {
        ingredientList.push(ingredient);
    }
    else {
        let index = ingredientList.indexOf(ingredient);
        ingredientList.splice(index, 1);
    }
}

function onPressCook() {
    // Find matching meal
    currentMeal = findMeal(selectedIngredients);

    // Display meal at bottom
}

const Cook = () => {
  return (
    <View >
        <FlatList
            data={DATA}
            renderItem={({item}) => <IngredientTile onPress={onPressIngredient} baseIngredient={item.ingredient} />}
            keyExtractor={item => item.ingredient.name}
        />
        <CustomButton onPress={onPressCook} title={'Cook'}/>
        <MealView meal={currentMeal}/>
    </View>
  );
};


export default Cook;