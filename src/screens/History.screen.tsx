import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useAppContext} from '../App.provider';
import {MoodItemRow} from '../components/MoodItemRow';
export const History: React.FC = () => {
  const appContext = useAppContext();

  if (appContext.moodList.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nothing to show yet!</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      {appContext.moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});
