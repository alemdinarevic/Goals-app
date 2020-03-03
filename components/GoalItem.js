import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.85} onPress={() => props.onPressDelete(props.goal.id)}>
			<View style = {styles.goalList}> 
	      <Text> {props.goal.value} </Text> 
	    </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
	goalList: {
	    padding: 10,
	    marginVertical: 5,
	    borderWidth: 0.5,
	    backgroundColor: '#ccc'
  }
});

export default GoalItem;