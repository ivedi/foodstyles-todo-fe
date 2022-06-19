import React, { useState } from 'react';
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
import TextButton from '../components/TextButton';


export default function LoginScreen({ navigation }) {
  const [filterState, setFilterState] = useState('All');
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

  const changeFilterState = (filterState) => {
    setFilterState(filterState);
  };

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
            <TodoList
              data={todos}
              keyExtractor={(todo) => todo.id}
              ListEmptyComponent={() => 
                <EmptyTodo>
                  There is no todo here!
                </EmptyTodo>
              }
              renderItem={({ item, index }) => (
                <TodoItem
                  todo={item}
                  showDelete={!index} />
              )} />
            <FilterContainer>
              <FilterTitle>Show:</FilterTitle>
              <TextButton
                text="All"
                textColor={() => (
                  filterState !== 'All'
                    ? '#4a77e5'
                    : '#1f2a4b'
                )}
                hasUnderline={filterState !== 'All'}
                marginLeft="1rem"
                width="auto"
                onClick={
                  () => changeFilterState('All')
                } />
              <TextButton
                text="Completed"
                textColor={() => (
                  filterState !== 'Completed'
                    ? '#4a77e5'
                    : '#1f2a4b'
                )}
                hasUnderline={filterState !== 'Completed'}
                marginLeft="1rem"
                width="auto"
                onClick={
                  () => changeFilterState('Completed')
                } />
              <TextButton
                text="Incompleted"
                textColor={() => (
                  filterState !== 'Incompleted'
                    ? '#4a77e5'
                    : '#1f2a4b'
                )}
                hasUnderline={filterState !== 'Incompleted'}
                marginLeft="1rem"
                width="auto"
                onClick={
                  () => changeFilterState('Incompleted')
                } />
            </FilterContainer>
          </PageContainer>
        </PageWrapper>
      </ScrollContainer>
      <LogoutContainer>
        <TextButton
          text="Logout" />
      </LogoutContainer>
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

const TodoList = styled.FlatList`
  margin-bottom: 1rem;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  margin-bottom: -1.5rem;
`;

const FilterTitle = styled.Text`
  font-family: mark-pro-regular;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1f2a4b96;
`;

const EmptyTodo = styled.Text`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #9ea3b2;
  font-style: italic;
`;

const LogoutContainer = styled.View`
  position: fixed;
  padding: 1rem;
  top:0;
  right: 0;
`;
