const maxIngredients = 5
const dbRecipeTableName = 'recipe'
const dbRecipeIngredientColumns = ''
const ingredientThumbnailPath = '../assets/Meals/'
const thumbnailExtension = '.png'

class Meal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.thumbnailFile = ingredientThumbnailPath + this.name.lower().replace(' ', '_') + thumbnailExtension;
    }
}