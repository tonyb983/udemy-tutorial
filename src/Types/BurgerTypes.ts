export type VariableIngredients = 'meat' | 'bacon' | 'lettuce' | 'cheese'
export type AllIngredients = 'bread-top' | 'bread-bottom' | VariableIngredients;

export interface Ingredient {
    ID: AllIngredients;
    Display: string;
    Price: number;
}
