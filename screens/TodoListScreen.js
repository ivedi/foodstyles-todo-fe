import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import PageInput from '../components/PageInput';
import TodoItem from '../components/TodoItem';


export default function LoginScreen({ navigation }) {
  const validateTodo = (text) => !!text;
  const todos = [{
    title: "Make a todo list",
    isCompleted: false,
  },{
    title: "Check off first item",
    isCompleted: true,
  },{
    title: "Realize you already did 2 things today",
    isCompleted: false,
  },{
    title: "Reward yourself with a nice, long nap",
    isCompleted: false,
  }];

  return (
    <SafeContainer>
      <ScrollContainer>
        <PageWrapper>
          <PageContainer>
            <PageHeader
              title="Todo List" />
            <PageInput
              placeholder="Add a new todo"
              validate={validateTodo}
              onChangeText={() => {}} />
            <TodoItem todo={todos[0]} />
            <TodoItem todo={todos[1]} />
            <TodoItem todo={todos[2]} />
            <TodoItem todo={todos[3]} />
          </PageContainer>
        </PageWrapper>
      </ScrollContainer>
    </SafeContainer>
  );
}


const SafeContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
`;

const PageWrapper = styled.View`
  height: 100vh;
  alignItems: center;
  justifyContent: center;
`
