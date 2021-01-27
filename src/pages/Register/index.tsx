import React, { useState } from 'react';
import { auth } from '../../services/firebase';

import { Container, Form, FormInput, FormTitle, Slogan, RegisterContainer, RegisterMessage, RegisterLink, FormButton, ButtonText, FormRegistButton } from './styles'

const Register: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")

  const registerUser = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      authUser.user.updateProfile({
        displayName: name,
        photoURL: image || 
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
      })
    }).catch(error => alert(error.message))
  }
  return (
    <Container behavior="padding" enabled >
      <FormTitle>
        <Slogan style={{color: '#c28ffb'}}>Welcome,</Slogan>
        <Slogan>To Dopamina.</Slogan>
      </FormTitle>

      <Form>
        <FormInput 
          placeholder="Name" 
          autoFocus
          type="text"
          value={name} 
          onChangeText={(text) => setName(text)} 
        />
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
        />
        <FormInput 
          placeholder="Profile Picture URL (optional)" 
          value={image} 
          onChangeText={(text) => setImage(text)} 
          onSubmitEditting={registerUser}
        />

        <FormButton>
          <ButtonText onPress={registerUser}>Register</ButtonText>
        </FormButton>
      </Form>
    </Container>
  )
}

export default Register;
