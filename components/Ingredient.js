class Ingredient {
    constructor(name, categoryList) {
      this.name = name;
      this.categoryList = categoryList.split(' and ');
      this.thumbnailFile = ingredientThumbnailPath + this.name.lower().replace(' ', '_') + thumbnailExtension
    }

    makeSQLQueryForIngredient() {
        // SQL clause for ingredient by name
        sqlSelect = 'SELECT id, name from ' + dbRecipeTableName
        sqlWhereName = ' WHERE ((' + dbRecipeIngredientColumns +') LIKE \'%' + Ingredient.name + '%\')'

        // SQL clause for ingredients categories
        sqlWhereCategories
        for (category in this.categoryList) {
            sqlWhereCategories += ' UNION'
            sqlWhereCategories += ' WHERE ((' + dbRecipeIngredientColumns +') LIKE \'%' + category + '%\')'
        }

        return sqlSelect + sqlWhereName + sqlWhereCategories
    }
}