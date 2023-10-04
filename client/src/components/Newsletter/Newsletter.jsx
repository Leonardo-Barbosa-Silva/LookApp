import { Send } from "@mui/icons-material"
import styled from "styled-components"



const Container = styled.section`
    width: 100%;
    height: 70vh;
    background: linear-gradient(to top, #efefef 0%, #f0c0f0, #efefef 100%);
    margin: 20px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function Newsletter() {
  return (
    <Container>
        <div className="newsletter-content">
            <div className="title">
                <h1>Newsletter</h1>
            </div>
            <h3>Get timely updates from your favorite products.</h3>
            <div className="input">
                <input type="text" placeholder="Your email here..."/>
                <button type="button">
                    <Send/>
                </button>
            </div>
        </div>
    </Container>
  )
}

export default Newsletter
