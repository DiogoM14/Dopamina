import React, { useState } from 'react'
import { Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from "@expo/vector-icons"

import { Container, Form, FormInput, FormTitle, FormDate, DateText, FormButton, ButtonText } from './styles'
import { db } from '../../services/firebase';

const AddTodo: React.FC = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState("")
  const [inputDescription, setInputDescription] = useState("")

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const showDatepicker = () => {
    showMode('date');
  }

  const createTodoCard = async () => {
    await db
      .collection('todoCard')
      .add({
        cardName: inputName,
        cardDescription: inputDescription,
      })
      .then(() => {
        navigation.goBack()
      })
      .catch((err) => alert(err))
  }

  return (
    <Container>
      <Form>
        <FormTitle>
          Create your Task Workspace
          <Text style={{color: '#c28ffb'}}>.</Text>
        </FormTitle>
        
        <FormInput 
          placeholder="Workspace name" 
          value={inputName}
          onChangeText={(text) => setInputName(text)}
        />
        <FormInput 
          placeholder="Workspace description" 
          value={inputDescription}
          onChangeText={(text) => setInputDescription(text)}
          onSubmitEditing={createTodoCard}
        />

        <FormButton>
          <ButtonText onPress={createTodoCard}>Create</ButtonText>
        </FormButton>
      </Form>
        <FormDate onPress={showDatepicker}>
            <Feather name="clock" size={18} color="#e1e1e1" />
          <DateText>
            Set Reminder
          </DateText>
        </FormDate>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </Container>
  )
}

export default AddTodo;
