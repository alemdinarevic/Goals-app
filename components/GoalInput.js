import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = (props) => {

	const [enteredGoal, setEnteredGoal] = useState('');
	const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const goalInputRefresh = () => {
  	setEnteredGoal('');
  }
  const addGoalHandler = () => {
  	goalInputRefresh();
  	props.onPressAddGoal(enteredGoal);
  }

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
		    <TextInput 
		      placeholder = "Course goal" 
		      style = {styles.input} 
		      onChangeText = {goalInputHandler}
		      value = {enteredGoal}
		    />
				<View style={styles.buttons}>
					<Button title = "CANCEL" color='red' style = {styles.cancelButton} onPress={props.onPressCancel}/>
					<Button title = "ADD" style = {styles.addButton} onPress={addGoalHandler}/>
				</View>						
	    </View>
	  </Modal>
			);		
}

const styles = StyleSheet.create({
	inputContainer: { 
		flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  input: {
		color: 'black',
    borderBottomColor: 'black', 
    borderWidth: 0.5, 
    padding: 10, 
    width: '80%'
	},
	
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%'
	},

  addButton: {
    color: '#ccc',
    borderColor: 'black'
	},
	cancelButton: {
		color: 'red'
	}
});

export default GoalInput;