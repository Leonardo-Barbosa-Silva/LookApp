import styled from 'styled-components'



const Container = styled.section`
  width: 400px;
  height: 400px;
  background-color: #fff;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    input {
      grid-column: span 4;
    }

    button {
      grid-column: span 2;
    }
  }
`


function UserAuth() {
  return (
    <Container>
      <div className="title">
          <h1>SIGN IN</h1>
      </div>
      <form>
          <input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={''}
            required
          />
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="text"
            value={''}
            required
          />
          <button type="submit">LOGIN</button>
          <div className='links'>
            <a>Don't you remember the password?</a>
            <a>Don't have you any account? Sing Up here!</a>
          </div>
      </form>
    </Container>
  )
}

export default UserAuth;
