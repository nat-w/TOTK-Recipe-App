const dbRecipeIngredientColumns = 'ingredient_1 || ingredient_2 || ingredient_3 || ingredient_4 || ingredient_5';
import icons from '../assets/iconIndex';

export default class Ingredient {
    name;
    categoryList;
    effect;
    selected;
    thumbnail;

    constructor (name, categoryList, effect, selected=false) {
        this.name = name;
        this.categoryList = categoryList;
        this.effect = effect;
        this.thumbnail = icons.ingredients[this.name];
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