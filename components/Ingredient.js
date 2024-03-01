const dbRecipeIngredientColumns = 'ingredient_1 + ingredient_2 + ingredient_3 + ingredient_4 + ingredient_5'
const ingredientThumbnailPath = '../assets/Ingredients/'
const thumbnailExtension = '.png'

class Ingredient {
    constructor(name, categoryList, effect, selected=false) {
      this.name = name;
      this.categoryList = categoryList.split(' and ');
      this.effect = effect;
      this.thumbnailFile = ingredientThumbnailPath + this.name.lower().replace(' ', '_') + thumbnailExtension;
      this.selected = selected;
    }

    makeSQLQueryForIngredient() {
        // SQL clause for ingredient by name
        let sqlWhereName = ' WHERE ((' + dbRecipeIngredientColumns +') LIKE \'%' + Ingredient.name + '%\')';

        // SQL clause for ingredients categories
        let sqlWhereCategories = ''
        for (category in this.categoryList) {
            sqlWhereCategories += ' UNION WHERE ((' + dbRecipeIngredientColumns +') LIKE \'%' + category + '%\')';
        }

        return sqlSelect + sqlWhereName + sqlWhereCategories;
    }
}