import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {
  registerUserStep1,
  registerUserStep2,
  registerUserStep3,
  selectUserId,
} from '../../redux';
import {useAppDispatch} from '../../redux/store';
import {FormatedScrollView} from '../../SharedComponents';

export const RegisterScreen = () => {
  const dispatch = useAppDispatch();
  const userId = useSelector(selectUserId);
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(registerUserStep1());
  }, [dispatch]);

  const register = () => {
    dispatch(registerUserStep3(name));
  };

  return (
    <FormatedScrollView>
      <Text>Enter your name:</Text>
      <TextInput onChangeText={setName} value={name} />
      <Button
        title="Check something"
        onPress={() => {
          dispatch(registerUserStep2());
        }}
      />
      <Button title="Register" onPress={register} />
      {userId ? <Text>UserId: {userId}</Text> : null}
    </FormatedScrollView>
  );
};
