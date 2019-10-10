import { Ingredient } from "./../Types/BurgerTypes";
import { createStore } from 'easy-peasy';


interface IngredientModel {

}

interface CartModel {

}

const ingredients: IngredientModel = {
  easy: "test"
}



export default createStore({ingredients, });
