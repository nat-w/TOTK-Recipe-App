const dbRecipeIngredientColumns = 'ingredient_1 || ingredient_2 || ingredient_3 || ingredient_4 || ingredient_5';
const ingredientThumbnailPath = '../assets/Ingredients/';
const thumbnailExtension = '.png';

export default class Ingredient {
    name;
    categoryList;
    effect;
    selected;
    thumbnailFile;

    constructor (name, categoryList, effect, selected) {
        this.name = name;
        this.categoryList = categoryList;
        this.effect = effect;
        this.thumbnailFile = require('../assets/Ingredients/' + 'apple' + '.png');
        this.selected = selected;
    }

    makeSQLQueryForIngredient() {
        // SQL clause for ingredient by name
        let sqlWhereName = ' WHERE ((' + dbRecipeIngredientColumns +') LIKE \'%' + Ingredient.name + '%\')';

        // SQL clause for ingredients categories
        let sqlWhereCategories = '';
        for (category in this.categoryList) {
            sqlWhereCategories += ' UNION WHERE ((' + dbRecipeIngredientColumns +') LIKE \'%' + category + '%\')';
        }

        return sqlSelect + sqlWhereName + sqlWhereCategories;
    }
}