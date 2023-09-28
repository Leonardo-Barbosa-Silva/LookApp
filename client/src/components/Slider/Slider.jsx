import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { contents } from "../../data/slider";
import Content from "./Content";
import { useState } from "react";


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
    z-index: 9
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
    z-index: 9
`

function Slider() {
    const [ translateX, setTranslateX ] = useState(0)

    function handleClickArrow(value) {
        if (value > 0) {
            setTranslateX(-200)
        } else if (value < -200) {
            setTranslateX(0)
        } else {
            setTranslateX(value)
        }
    }

    return (
        <Container>
            <ArrowLeft className="arrow" onClick={() => handleClickArrow(translateX + 100)}>
                <ArrowLeftOutlined fontSize="large"/>
            </ArrowLeft>
            <ArrowRight className="arrow" onClick={() => handleClickArrow(translateX - 100)}>
                <ArrowRightOutlined fontSize="large" />
            </ArrowRight>
            <div className="slider">
                {contents.map( (content) => (
                    <Content content={content} key={content.id} translate={translateX}/>
                ))}
            </div>
        </Container>
    )
}

export default Slider;
