import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import Filters from "../../components/Filters/Filters";
import { useNavigate } from "react-router-dom";




const Container = styled.section`
    width: 100%;
    height: 100%;
`


function ProductsList() {
  const navigate = useNavigate()

  return (
    <Container>
        <Announcement />
        <NavBar />
        <Filters />
        <Products />
        <button 
          onClick={() => navigate('/home')}
          style={{ marginTop: '100px', marginLeft: '100px' }}
        >
          Go to Home!
        </button>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductsList
