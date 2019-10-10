import React from 'react'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from './Burger.module.css';
import { VariableIngredients } from "../../Types/BurgerTypes";

export interface BurgerProps {
    ingredients: Array<VariableIngredients>
}

const Burger: React.FC<BurgerProps> = ({ingredients}) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient ingredientType='bread-top' />
        {ingredients.map((ing,i) => <BurgerIngredient ingredientType={ing} key={`${ing}${i}`} />)}
      <BurgerIngredient ingredientType='bread-bottom' />
    </div>
  )
}

export default Burger;
