import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Container, Form, FormInput, FormTitle, Slogan, RegisterContainer, RegisterTitle, RegisterMessage, RegisterLink, FormButton, ButtonText, FormRegistButton } from './styles'

const Login: React.FC = () => {
  const navigation = useNavigation()

  function handleNavigateToRegister() {
    navigation.navigate('Register')
  }
  return (
    <Container>
      <FormTitle>
        <Slogan style={{color: '#c28ffb'}}>Hey,</Slogan>
        <Slogan>Login Now.</Slogan>
      </FormTitle>

      <RegisterTitle>Turn on your Dopamina </RegisterTitle>

      <Form>
        <FormInput placeholder="E-mail" />
        <FormInput placeholder="Password" />

        <FormButton>
          <ButtonText>Login</ButtonText>
        </FormButton>
      </Form>

      <RegisterContainer>
        <RegisterMessage>If you are new / </RegisterMessage>
        <RegisterLink onPress={handleNavigateToRegister}>Create your account</RegisterLink>
      </RegisterContainer>
    </Container>
  )
}

export default Login;
