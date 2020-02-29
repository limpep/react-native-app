import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal
} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.btnInp}>
        <TextInput
          placeholder='add a value'
          style={styles.inpt}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainter}>
          <TouchableOpacity style={styles.btnCancel} onPress={props.onCancel}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnAdd} onPress={addGoalHandler}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btnInp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdd: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10
  },
  btnCancel: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10
  },
  btnText: {
    color: 'white'
  },
  inpt: {
    width: '80%',
    padding: 10,
    borderColor: '#7a42f4',
    borderWidth: 1,
    marginBottom: 10
  },
  btnContainter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    width: '30%'
  }
});

export default GoalInput;
