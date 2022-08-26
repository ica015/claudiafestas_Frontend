import Cards from "../cards";
import { ProductType } from '../../../services/ProductService'

interface props{
    product:ProductType[]
  }

export default function CardsProducts({product} : props) {
    return (
        <>
            {
                product.map((product)=>(
                    <Cards key={product.id} product={product}/>
                ))
            }
        </>
    )

}