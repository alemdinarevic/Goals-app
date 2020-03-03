import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = (goalText) => {
    setCourseGoals(currentGoals => [...courseGoals, {id: Math.random().toString(), value: goalText}]);
    setAddMode(false);
  }
  const removeGoalHandler = (goalID) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    })
  }
  const cancelAddModeHandler = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)}/>
      <GoalInput visible={addMode} onPressAddGoal={addGoalHandler} onPressCancel={cancelAddModeHandler}/>
      <FlatList 
        keyExtractor = {(item, index) => item.id}
        data = {courseGoals} 
        renderItem = {itemData => (<GoalItem onPressDelete={removeGoalHandler} goal={itemData.item} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  screen: {
    padding: 50
  }
});

