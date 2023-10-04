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
        <h3 style={{ marginTop: '50px', color: 'red' }}>Just for frontend fun!</h3>
    </Container>
  )
}

export default Auth;
