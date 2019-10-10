import React from 'react'
import { AllIngredients } from "../../../Types/BurgerTypes"
import styles from './BurgerIngredient.module.css';

interface Props {
    ingredientType: AllIngredients;
};

const BurgerIngredient: React.FC<Props> = ({ingredientType}) => {

    const getJsxFromType = (it: AllIngredients): JSX.Element => {
        switch(it){
            case 'bread-top':
                return(<div className={styles.BreadTop}><div className={styles.Seeds1} /><div className={styles.Seeds2} /></div>);
            case 'bread-bottom':
              return(<div className={styles.BreadBottom}/>);
            case 'bacon':
              return(<div className={styles.Bacon} />);
            case 'cheese':
              return(<div className={styles.Cheese} />);
            case 'lettuce':
              return(<div className={styles.Lettuce} />);
            case 'meat':
              return(<div className={styles.Meat} />);
            default:
              return(<div className={styles.Error}>Error</div>);
        }
    }

    return getJsxFromType(ingredientType);
}

export default BurgerIngredient;
