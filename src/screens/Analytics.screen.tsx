import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {VictoryPie} from 'victory-native';
import groupBy from 'lodash/groupBy';
import {useAppContext} from '../App.provider';
import {theme} from '../theme';

export const Analytics: React.FC = () => {
  const appContext = useAppContext();

  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nothing to show yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
        style={{labels: {fontSize: 50}}}
        data={data}
      />
    </View>
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
