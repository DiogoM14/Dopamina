import React, { useState } from 'react'
import { Text, Platform, View, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from "@expo/vector-icons"

import { Container, Form, FormInput, FormTitle, FormDate, DateText, FormButton, ButtonText } from './styles'

const AddTodo: React.FC = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  return (
    <Container>
      <Form>
        <FormTitle>
          Create your Task Workspace
          <Text style={{color: '#c28ffb'}}>.</Text>
        </FormTitle>
        
        <FormInput placeholder="Workspace name" />
        <FormInput placeholder="Workspace description" />


        <FormButton>
          <ButtonText>Create</ButtonText>
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
