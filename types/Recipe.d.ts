/**
 * Recipe
 * A Recipe
 */
declare interface Recipe {
    id?: number;
    title: string;
    ingredients: string;
    difficulty: string;
    authorId: number;
    rating: number;
}

export { Recipe };
