import {MoodPicker} from 'components/MoodPicker';
import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {useAppContext} from '../App.provider';

const imageUrl =
  'https://images.unsplash.com/photo-1614450771009-c21bd418af60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80';
export const Home: React.FC = () => {
  const appContext = useAppContext();

  return (
    <ImageBackground source={{uri: imageUrl}} style={styles.container}>
      <MoodPicker onSelect={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    color: '#000000',
    padding: 5,
  },
});
