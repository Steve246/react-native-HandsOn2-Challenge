import AsyncStorage from "@react-native-async-storage/async-storage";

export const Storage = () => {
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      throw e;
    }
  };

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      throw e;
    }
  };
  const deleteData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      throw e;
    }
  };

  return {
    storeData,
    getData,
    deleteData,
  };
};
