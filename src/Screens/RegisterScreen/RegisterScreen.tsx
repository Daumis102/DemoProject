import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {
  registerUserStep1,
  registerUserStep2,
  registerUserStep3,
  selectUserId,
} from '../../redux/slices/UserSlice';
import {useAppDispatch} from '../../redux/store';
import {FormatedScrollView} from '../../SharedComponents';

export const RegisterScreen = () => {
  const dispatch = useAppDispatch();
  const userId = useSelector(selectUserId);
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(registerUserStep1());
  }, []);

  const register = () => {
    dispatch(registerUserStep3(name));
  };

  return (
    <FormatedScrollView>
      <Text>Enter your name:</Text>
      <TextInput onChangeText={setName} value={name}></TextInput>
      <Button
        title="Check something"
        onPress={() => {
          dispatch(registerUserStep2());
        }}></Button>
      <Button title="Register" onPress={register}></Button>
      {userId ? <Text>UserId: {userId}</Text> : null}
    </FormatedScrollView>
  );
};
