import React from 'react';
import {Button} from 'react-native';
import {LoginScreenProps} from '../../navigation';
import {loginUser} from '../../redux/slices/UserSlice';
import {useAppDispatch} from '../../redux/store';
import {FormatedScrollView} from '../../SharedComponents';

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(loginUser('Leanne Graham'));
  };
  const register = () => {
    navigation.navigate('Register');
  };
  return (
    <FormatedScrollView>
      <Button title="Login" onPress={login}></Button>
      <Button title="Register" onPress={register}></Button>
    </FormatedScrollView>
  );
};
