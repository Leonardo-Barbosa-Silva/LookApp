import styled from 'styled-components';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import SingleProduct from '../../components/Products/SingleProduct';
import { contents } from '../../data/products';


const Container = styled.section`
    width: 100%;
    height: 100%;
`

function Product() {
    return (
        <Container>
            <Announcement />
            <NavBar />
            <SingleProduct content={contents[2]}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
