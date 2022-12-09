import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import uuid from 'react-native-uuid';
import useOrientationStyle from '../../hooks';
import {
  FormatedScrollView,
  FormatedView,
  TextInput,
} from '../../SharedComponents';
import {ListItem} from './ListItem';
import styles from './style';
import {Name} from './types';

export const HomeScreen = () => {
  const [name, setName] = useState('');
  const {style} = useOrientationStyle(styles.portrait, styles.landscape);
  const [names, setNames] = useState<Name[]>([]);

  function addName() {
    const nameToAdd: Name = {name, id: uuid.v4().toString()};
    setNames([...names, nameToAdd]);
    setName('');
  }
  return (
    <View style={style.container}>
      <FormatedView style={style.headerView}>
        <Text style={style.headerText}>Hello, enter names:</Text>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Enter name"></TextInput>
        <Button onPress={addName} title="Add"></Button>
      </FormatedView>
      <FormatedScrollView style={style.scrollView}>
        {names.map(name => (
          <ListItem text={name.name} key={name.id}></ListItem>
        ))}
      </FormatedScrollView>
    </View>
  );
};
