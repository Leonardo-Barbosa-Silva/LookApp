import styled from "styled-components";
import backgroundAuth from '../../images/auth/background-auth.jpg';
import UserAuth from "../../components/Form/UserAuth";


const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
        ),
        url(${backgroundAuth})
    ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function Auth() {
  return (
    <Container>
        <UserAuth />
    </Container>
  )
}

export default Auth;
