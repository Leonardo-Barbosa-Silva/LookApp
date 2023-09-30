import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"



const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #dfdfff;
    border-radius: 5px;
`


function Product({ content }) {
    const [ openedIcons, setOpenedIcons ] = useState(false)

  return (
    <Container>
        <div className="image">
            <img src={content.img} alt=""/>
        </div>
        <div className="icons">
            <div className="icon">
                <ShoppingCartOutlined />
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
