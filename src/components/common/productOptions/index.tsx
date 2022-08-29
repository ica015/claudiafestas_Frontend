import styles from './style.module.sass'
import { OptionalType } from '../../../services/ProductService'

interface props {
    optional: OptionalType
}

export default function ProductOptional(optional:props){
    <div className={styles.prices}>
        <span className={styles.discount}> this.calcDiscount(optional.optional.oldPrice, optional.optional.newPrice)</span>
        <span className={styles.oldPrice}>R$ {`${optional.optional.oldPrice}`}</span>
        <span className={styles.newPrice}>R$ {`${optional.optional.newPrice}`}</span>
    </div>

    
function calcDiscount(OldPrice: number, newPrice: number) {
    return ((1- (newPrice / OldPrice))*100).toFixed(2) 
}
}

