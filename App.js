/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalsHandler = (goal) => {
    console.log(goal);
    setGoals((currentGoal) => [
      ...goals,
      {id: Math.random().toString(), value: goal},
    ]);
    setIsAddMode(false);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.textContainer}>Sample Goal Application</Text>
      <Button
        title="Add New Goals"
        color="#32a897"
        onPress={() => setIsAddMode(true)}
      />
      <GoalInput
        visible={isAddMode}
        onCancel={cancelGoalAdditionHandler}
        onAddGoal={addGoalsHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {padding: 50},
  listItems: {
    width: '70%',
    padding: 10,
    backgroundColor: '#6fa832',
    marginVertical: 10,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#a81d5c',
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    padding: 5,
    marginBottom: 5,
  },
});

export default App;
