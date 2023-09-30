import styled from 'styled-components';
import Product from './Product';
import { contents } from '../../data/products';



const Container = styled.section`
  width: 100%;
  height: 100%;
`

function Products() {
  return (
    <Container>
        <div className="products-content">
            {contents.map( content => (
                <Product content={content} key={content.id}/>
            ))}
        </div>
    </Container>
  )
}

export default Products
