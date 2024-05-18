import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font"; //Need this library to use custom fonts
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync;

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  //load font to screen
  const onLayoutRootView = useCallback(async () => {
    //similar to useEffect()
    //show Homepage only if fonts have been loaded
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
