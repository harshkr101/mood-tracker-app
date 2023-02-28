import {MoodPicker} from 'components/MoodPicker';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MoodOptionType, MoodOptionWithTimestamp} from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {moodList.map(item => (
        <Text key={item.timestamp} style={styles.list}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
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
