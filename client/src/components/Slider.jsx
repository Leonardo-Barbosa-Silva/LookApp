import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { content } from "../data/slider";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`
const ArrowLeft = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #d7d7d7;
    position: absolute;
    left: 5px;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
`
const ArrowRight = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #d7d7d7;
    position: absolute;
    right: 5px;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
`

function Slider() {
  return (
    <Container>
        <ArrowLeft>
        <ArrowLeftOutlined fontSize="large" />
        </ArrowLeft>
        <ArrowRight>
        <ArrowRightOutlined fontSize="large" />
        </ArrowRight>
        <div className="slider-content">
            {contents.map( (content) => (
                <>
                    <div className="left">

                    </div>
                    <div className="right">

                    </div>
                </>
            ))}
        </div>
    </Container>
  )
}

export default Slider;
