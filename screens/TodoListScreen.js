import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import PageInput from '../components/PageInput';
import TodoItem from '../components/TodoItem';


export default function LoginScreen({ navigation }) {
  const validateTodo = (text) => !!text;
  const todos = [{
    id: 0,
    title: "Make a todo list",
    isCompleted: false,
  },{
    id: 1,
    title: "Check off first item",
    isCompleted: true,
  },{
    id: 2,
    title: "Realize you already did 2 things today",
    isCompleted: false,
  },{
    id: 3,
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
            <FlatList
              data={todos}
              keyExtractor={(todo) => todo.id}
              ListEmptyComponent={() => 
                <EmptyTodo>
                  There is no todo here!
                </EmptyTodo>
              }
              renderItem={({ item, index }) => (
                <TodoItem todo={item} />
              )} />
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

const EmptyTodo = styled.Text`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #9ea3b2;
  font-style: italic;
`;
