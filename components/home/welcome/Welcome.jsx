import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Flatlist,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");
  const jobTypes = ["Full-time", "Part-time", "Contractor"];

  const renderItemConst = ({ item }) => (
    <TouchableOpacity
      style={styles.tab(activeJobType, item)}
      onPress={() => {
        setActiveJobType(item);
        //react native router
        router.push(`/search/${item}`);
      }}
    >
      <Text
        //add a style that blackens the selected job type. unselected ones are greyed.
        style={styles.tabText(activeJobType, item)}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello Brian</Text>
          <Text style={styles.welcomeMessage}>Find your job!</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Search Here!"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          //an array of data is expected for the "data" prop and a rendering function is expected for the "renderItem" prop
          data={jobTypes}
          //the 'keyExtractor' prop to extract a unique key from each item
          //in keyExtractor, we use the item itself as its own key
          keyExtractor={(item) => item}
          renderItem={renderItemConst}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
