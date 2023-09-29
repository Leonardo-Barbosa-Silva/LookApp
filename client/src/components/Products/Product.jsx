import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"



const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function Product({ content }) {
  return (
    <Container>
        <div className="image">
            <img src={content.img} alt=""/>
        </div>
        <div className="icons">
            <div className="icon">
                <ShoppingCartOutlined color="#fff"/>
            </div>
            <div className="icon">
                <SearchOutlined /> 
            </div>
            <div className="icon">
                <FavoriteBorderOutlined />
            </div>
        </div>
    </Container>
  )
}

export default Product
