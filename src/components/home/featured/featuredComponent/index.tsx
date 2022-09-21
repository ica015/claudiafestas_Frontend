import Link from 'next/link'
import { useState } from 'react'
import { Card, CardSubtitle, Tooltip } from 'reactstrap'
import { ProductType } from '../../../../services/ProductService'
import styles from './styles.module.sass'

interface props{
    product: ProductType
}
export default function FeaturedComponent({product}:props){
    
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return(
        <>
            <Link href={`/produto/${product.id}`}>    
                <Card className={styles.card} id={`tooltip-${product.id}`}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASEURL}/${product.imageUrl}`}
                        alt={product.name}
                        />
                    <Tooltip 
                        target={'tooltip-'+ product.id}
                        isOpen={tooltipOpen}
                        toggle={toggle}
                        placement='bottom'
                    >
                        {product.name}
                    </Tooltip>
                </Card>
            </Link>
        </>
    )
}