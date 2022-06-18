import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    "mark-pro-regular": require("../assets/fonts/mark-pro-regular.ttf"),
  });

export default useFonts
