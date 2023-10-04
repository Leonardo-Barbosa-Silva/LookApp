import styled from 'styled-components';
import Announcement from '../../components/Announcement/Announcement';
import NavBar from '../../components/NavBar/NavBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import SingleProduct from '../../components/Products/SingleProduct';
import { contents } from '../../data/products';
import { useLocation, useNavigate } from 'react-router-dom';


const Container = styled.section`
    width: 100%;
    height: 100%;
`

function Product() {
    const navigate = useNavigate()
    const location = useLocation()
    const content = location.state && location.state.data

    return (
        <Container>
            <Announcement />
            <NavBar />
            <SingleProduct content={content ? content : contents[2]}/>
            <button 
                onClick={() => navigate('/products')}
                style={{ marginTop: '100px', marginLeft: '100px' }}
            >
                Filter Products Here!
            </button>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
