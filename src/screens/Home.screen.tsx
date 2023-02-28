import {MoodPicker} from 'components/MoodPicker';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MoodOptionType, MoodOptionWithTimestamp} from '../types';
import {MoodItemRow} from 'components/MoodItemRow';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
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
