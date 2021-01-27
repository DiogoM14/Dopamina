import React, { useState } from 'react';
import { auth } from '../../services/firebase';

import { Container, Form, FormInput, FormTitle, Slogan, RegisterContainer, RegisterMessage, RegisterLink, FormButton, ButtonText, FormRegistButton } from './styles'

const Register: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      authUser.user.update({
        displayName: email,
        photoURL: imageUrl || 
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfile_avatar_placeholder_large.png&psig=AOvVaw2CJh2Zu34lcKDTXjNiuiUB&ust=1611843034090000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJij0q6lvO4CFQAAAAAdAAAAABAD"
      })
    }).catch(error => alert(error.message))
  }
  return (
    <Container>
      <FormTitle>
        <Slogan style={{color: '#c28ffb'}}>Welcome,</Slogan>
        <Slogan>To Dopamina.</Slogan>
      </FormTitle>

      <Form>
        <FormInput placeholder="Name" />
        <FormInput placeholder="E-mail" />
        <FormInput placeholder="Password" />

        <FormButton>
          <ButtonText>Register</ButtonText>
        </FormButton>
      </Form>
    </Container>
  )
}

export default Register;
