import Cards from "../../common/cards";
import { ProductType } from '../../../services/ProductService'

import { Container } from 'reactstrap'

interface props{
    product:ProductType[]
  }

export default function CardsProducts({ product } : props) {
    return (
        <>
            <Container className='d-flex flex-wrap justify-content-center mt-4'>
                {  
                    // console.log(product.products[0])
                    product.products.map((product: any) =>(
                        <Cards key={product.id} product={product} />
                        // console.log(product)
                    ))
                    
                }
            </Container>
        </>
    )

}