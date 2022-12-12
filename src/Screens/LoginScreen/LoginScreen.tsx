import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native';
import {LoginScreenProps} from '../../navigation';
import {loginUser} from '../../redux';
import {useAppDispatch} from '../../redux/store';
import {FormatedScrollView} from '../../SharedComponents';

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();
  const {t, i18n} = useTranslation();

  const login = () => {
    dispatch(loginUser('Leanne Graham'));
  };
  const register = () => {
    navigation.navigate('Register');
  };
  function changeLanguage(): void {
    i18n.language === 'en'
      ? i18n.changeLanguage('lt')
      : i18n.changeLanguage('en');
  }
  return (
    <FormatedScrollView>
      <Button title={t('Login')} onPress={login} />
      <Button title={t('Register')} onPress={register} />
      <Button title={t('Change language')} onPress={changeLanguage} />
    </FormatedScrollView>
  );
};
