import React from 'react'
import { auth } from '../../services/firebase'

import { Container, Form, FormInput, FormTitle, Slogan, FormButton, ButtonText, FormRegistButton } from './styles'

const Login: React.FC = () => {
  return (
    <Container>
        <FormTitle>
          <Slogan>Turn on your</Slogan>
          <Slogan style={{color: '#c28ffb'}}>Dopamina</Slogan>
        </FormTitle>

      <Form>
        <FormInput placeholder="E-mail" />
        <FormInput placeholder="Password" />

        <FormButton>
          <ButtonText>Login</ButtonText>
        </FormButton>
        <FormRegistButton>
          <ButtonText>Register</ButtonText>
        </FormRegistButton>
      </Form>
    </Container>
  )
}

export default Login;
