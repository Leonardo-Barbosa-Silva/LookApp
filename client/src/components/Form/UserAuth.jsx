import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'



const Container = styled.section`
  width: 500px;
  height: ${ props => props.$pageType === 'login' ? '380px' : '450px'};
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 20px;

    h1 {
      font-weight: 300;
      font-size: 2rem;
    }
  }

  ${ props => props.$pageType === 'login' && (
    `
    form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
  
      input {
        border: 1px solid #333;
        padding: 12px;
      }
  
      button {
        grid-column: span 2;
        background-color: teal;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 0.9rem;
      }
    }
    `
  )} 
  
  ${ props => props.$pageType === 'register' && (
    `
    form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 20px;

      input {
        width: calc(50% - 10px);
        border: 1px solid #333;
        padding: 10px;
      }

      #email {
        width: 100%;
      }
  
      button {
        width: 100%;
        background-color: teal;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 0.9rem;
      }
    }
    `
  )}

  .links {
    display: flex;
    flex-direction: column;
    grid-gap: 10px;

    a {
      font-size: 0.8rem;
      color: blue;
      text-decoration: underline;
    }

    p {
      font-size: 0.7rem;
    }

    a:hover {
      cursor: pointer;
      opacity: 0.4;
    }
  }
`


function UserAuth() {
  const [ pageType, setPageType ] = useState('login')

  const [ loginForm, setLoginForm ] = useState({
    email: '',
    password: ''
  })

  const [ registerForm, setRegisterForm ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()

  function onChangeForm(e) {
    if (pageType === 'login') {
      setLoginForm({
        ...loginForm,
        [e.target.id]: e.target.value
      })
    } else if (pageType === 'register') {
      setRegisterForm({
        ...registerForm,
        [e.target.id]: e.target.value
      })
    }
  }

  function handleSubmit() {
    navigate('/home')
  }

  return (
    <Container $pageType={pageType}>
      {pageType === 'login' && (
        <>
          <div className="title">
            <h1>SIGN IN</h1>
          </div>
          <form onSubmit={() => handleSubmit()}>
              <input
                id="email"
                name="email"
                placeholder="E-mail"
                type="text"
                value={loginForm.email}
                required
                onChange={onChangeForm.bind(null)}
              />
              <input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={loginForm.password}
                required
                onChange={onChangeForm.bind(null)}
              />
              <button type="submit">LOGIN</button>
          </form>
          <div className='links'>
            <a>Don't you remember the password?</a>
            <a onClick={() => setPageType('register')}>
              Don't have you any account? Sign Up here!
            </a>
          </div>
        </>
      )}

      {pageType === 'register' && (
        <>
        <div className="title">
          <h1>SIGN UP</h1>
        </div>
        <form onSubmit={() => handleSubmit()}>
            <input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
              value={registerForm.firstName}
              required
              onChange={onChangeForm.bind(null)}
            />
            <input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={registerForm.lastName}
              required
              onChange={onChangeForm.bind(null)}
            />
            <input
              id="email"
              name="email"
              placeholder="E-mail"
              type="text"
              value={registerForm.email}
              required
              onChange={onChangeForm.bind(null)}
            />
            <input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={registerForm.password}
              required
              onChange={onChangeForm.bind(null)}
            />
            <input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              value={registerForm.confirmPassword}
              required
              onChange={onChangeForm.bind(null)}
            />
            <button type="submit">REGISTER</button>
        </form>
        <div className='links'>
          <p>
            By create an account, I consent to the processing of my personal data in accordance with
            the <strong>PRIVACY POLICY</strong>.
          </p>
          <a onClick={() => setPageType('login')}>
            Already have an account? Sign In here!
          </a>
        </div>
        </>
      )}
    </Container>
  )
}

export default UserAuth;
