import React from 'react';
import {MoodOptionType, MoodOptionWithTimestamp} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};
// getter for storage
const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (err) {
    Alert.alert('Unable to get app data');
    return null;
  }
};

// setter for storage
const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch (err) {
    Alert.alert('Unable to store app data');
  }
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const defaultValue = {
  moodList: [],
  handleSelectMood: () => {},
};

const AppContext = React.createContext<AppContextType>(defaultValue);
export const useAppContext = () => React.useContext(AppContext);

export const AppProvider: React.FC = ({children}) => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);
  React.useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, {mood, timestamp: Date.now()}];
      setAppData({moods: newValue});
      return newValue;
    });
  }, []);
  return (
    <AppContext.Provider value={{moodList, handleSelectMood}}>
      {children}
    </AppContext.Provider>
  );
};
