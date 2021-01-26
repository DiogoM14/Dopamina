import React from 'react';
import { auth } from '../../services/firebase';

import { Text } from 'react-native';

import { Container } from './styles';

const Register: React.FC = () => {
  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      authUser.user.update({
        displayName: email,
        
      })
    }).catch(error => alert(error.message))
  }
  return (
    <Container>
      <Text>Register</Text>
    </Container>
  );
};

export default Register;
