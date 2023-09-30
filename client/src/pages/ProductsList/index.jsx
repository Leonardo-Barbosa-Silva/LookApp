import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import Filters from "../../components/Filters/Filters";




const Container = styled.section`
    width: 100%;
    height: 100%;
`


function ProductsList() {
  return (
    <Container>
        <Announcement />
        <NavBar />
        <Filters />
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductsList
