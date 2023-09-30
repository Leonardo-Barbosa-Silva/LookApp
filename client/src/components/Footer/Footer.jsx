import styled from "styled-components";
import { contents } from '../../data/payments';
import leonardoLogo from '../../images/leonardo-logo.png';
import { GitHub, LinkedIn } from "@mui/icons-material";


const Container = styled.footer`
    background-color: #2a2a2a
`


function Footer() {
  return (
    <Container>
        <section className="services">
            <div className="about-us">
                <div className="title">
                    <h4>About Us</h4>
                </div>
                <div className="content">
                    <ul>
                        <li>Know Us</li>
                        <li>How to buy</li>
                        <li>Discounts</li>
                    </ul>
                </div>
            </div>
            <div className="info">
                <div className="title">
                    <h4>Important</h4>
                </div>
                <div className="content">
                    <ul>
                        <li>Contact Us</li>
                        <li>Doubts</li>
                        <li>Deadlines</li>
                        <li>Payment Methods</li>
                        <li>Returns</li>
                    </ul>
                </div>
            </div>
            <div className="payments">
                <div className="title">
                    <h4>Payment Methods</h4>
                </div>
                <div className="content">
                    {contents.map( content => (
                        <img src={content.img} alt="" key={content.id}/>
                    ))}
                </div>
            </div>
            <div className="logo">
                <img src={leonardoLogo} alt=""/>
                {/*<div className="social">
                        <LinkedIn />
                        <GitHub />
                </div>*/}
            </div>
        </section>
        <section className="copy">
            <div className="copyright">
                <p>COPYRIGHT © 2023. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS.</p>
            </div>
            <div className="logo">
                <h1>LOOK</h1>
            </div>
        </section>
    </Container>
  )
}

export default Footer;
