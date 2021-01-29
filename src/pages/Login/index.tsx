import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { auth } from '../../services/firebase'

import { Container, Form, FormInput, FormTitle, Slogan, RegisterContainer, RegisterTitle, RegisterMessage, RegisterLink, FormButton, ButtonText } from './styles'

const Login: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        navigation.replace('Landing')
      }
    })

    return unsubscribe  // Cleanup function
  }, [])

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .catch(err => alert(err))
  }

  const handleNavigateToRegister = () => {
    navigation.navigate('Register')
  }
  return (
    <Container behavior="padding" enabled>
      <FormTitle>
        <Slogan style={{color: '#c28ffb'}}>Hey,</Slogan>
        <Slogan>Login Now.</Slogan>
      </FormTitle>

      <RegisterTitle>Turn on your Dopamina </RegisterTitle>

      <Form>
        <FormInput 
          placeholder="E-mail"
          type="email"
          value={email} 
          onChangeText={(text) => setEmail(text)} 
        />
        <FormInput 
          placeholder="Password" 
          type="password" 
          secureTextEntry
          value={password} 
          onChangeText={(text) => setPassword(text)} 
          onSubmitEditing={signIn}
        />
        <FormButton>
          <ButtonText onPress={signIn}>Login</ButtonText>
        </FormButton>
        <View style={{height: 100}} />
      </Form>

      <RegisterContainer>
        <RegisterMessage>If you are new / </RegisterMessage>
        <RegisterLink onPress={handleNavigateToRegister}>Create your account</RegisterLink>
      </RegisterContainer>
    </Container>
  )
}

export default Login;
