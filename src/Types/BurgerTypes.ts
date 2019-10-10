export type IngredientID = 'bread-top' | 'bread-bottom' | 'meat' | 'bacon' | 'lettuce' | 'cheese';

export interface Ingredient {
    ID: IngredientID;
    Display: string;
    Price: number;
}
