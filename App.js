import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#212121" />

      {/* HEADER: logo */}
      <View style={styles.logoView}>
        <Image
          source={require("./assets/img/logo-imdb.png")}
          style={styles.logo}
        />
      </View>

      {/* MAIN */}
      <View backgroundColor={"#212121"}>
        {/* TOP-VIEW: title, infos, img & description, rating */}
        <View>
          {/* title */}
          <Text style={styles.white}>Interstellar</Text>
          {/* infos */}
          <View style={styles.infos}>
            <Text style={styles.white}>2014</Text>
            <Text style={styles.white}>PG-13</Text>
            <Text style={styles.white}>2h49min</Text>
            <Text style={styles.white}>Adventure, Drama, Sci-Fi</Text>
          </View>
          {/* img & description */}
          <View style={styles.imgAndDescription}>
            <Image
              source={require("./assets/img/film.jpg")}
              style={styles.filmImg}
            />
            <View>
              <Text style={styles.white}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("Add to watchlist");
                }}
                activeOpacity={0.7}
                style={styles.addBtn}
              >
                <Text style={styles.white}>
                  <AntDesign
                    name="plus"
                    size={24}
                    color="black"
                    style={styles.white}
                  />
                  ADD TO WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* rating */}
          <View style={styles.rating}>
            <View>
              <AntDesign name="star" size={24} color="#E6B91F" />
              <Text style={styles.white}>8,6/10</Text>
              <Text style={[styles.white, styles.whiteOpacity]}>1.1M</Text>
            </View>
            <View>
              <AntDesign name="staro" size={24} color="white" />
              <Text style={styles.white}>RATE THIS</Text>
            </View>
            <View>
              <View backgroundColor={"#61C74F"}>
                <Text style={styles.white}>74</Text>
              </View>
              <Text style={styles.white}>Metascore</Text>
              <Text style={[styles.white, styles.whiteOpacity]}>
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>

        {/* CAST VIEW */}
        <View>
          {/* title & see-all button */}
          <View style={styles.castTitle}>
            <Text style={styles.white}>Top Billed Cast</Text>
            <Pressable>
              <Text style={styles.seeAllBtnText}>SEE ALL</Text>
            </Pressable>
          </View>
          {/* actors img */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.actorView}>
              <Image
                source={require("./assets/img/matthew.jpg")}
                style={styles.actorImg}
              />
              <View>
                <Text
                  style={styles.white}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Matthew McConaughey
                </Text>
                <Text style={[styles.white, styles.whiteOpacity]}>Cooper</Text>
              </View>
            </View>
            <View style={styles.actorView}>
              <Image
                source={require("./assets/img/anne.jpg")}
                style={styles.actorImg}
              />
              <View>
                <Text
                  style={styles.white}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Anne Hathaway
                </Text>
                <Text style={[styles.white, styles.whiteOpacity]}>Brand</Text>
              </View>
            </View>
            <View style={styles.actorView}>
              <Image
                source={require("./assets/img/jessica.jpg")}
                style={styles.actorImg}
              />
              <View>
                <Text
                  style={styles.white}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Jessica Chastain
                </Text>
                <Text style={[styles.white, styles.whiteOpacity]}>Murph</Text>
              </View>
            </View>
            <View style={styles.actorView}>
              <Image
                source={require("./assets/img/mackenzie.jpg")}
                style={styles.actorImg}
              />
              <View>
                <Text
                  style={styles.white}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Mackenzie Foy
                </Text>
                <Text style={[styles.white, styles.whiteOpacity]}>Murph</Text>
              </View>
            </View>
          </ScrollView>
          {/* director & writers */}
          <View>
            <View>
              <Text style={styles.white}>Director</Text>
              <Text style={[styles.white, styles.whiteOpacity]}>
                Christopher Nolan
              </Text>
            </View>
            <View>
              <Text style={styles.white}>Writers</Text>
              <Text style={[styles.white, styles.whiteOpacity]}>
                Jonathan Nolan (written by) and Christopher Nolan (written by)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },

  // HEADER: logo
  logoView: {
    backgroundColor: "#393939",
    height: 100,
    borderWidth: 3,
  },
  logo: {
    tintColor: "#fff",
    height: 80,
    width: 80,
    resizeMode: "contain",
  },

  // MAIN
  // TOP-VIEW: title, infos, img & description, rating
  // infos
  infos: {
    flexDirection: "row",
  },
  // img & description
  imgAndDescription: {
    flexDirection: "row",
  },
  filmImg: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  // add button
  addBtn: {
    backgroundColor: "#0177BD",
    borderRadius: 5,
  },
  // rating
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // CAST VIEW
  // title & see-all button
  castTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAllBtnText: { color: "#0EA4E4" },
  // actors img
  actorView: {
    width: 120,
  },
  actorImg: {
    height: 200,
    width: 100,
    resizeMode: "contain",
  },

  // GENERAL
  // colors
  white: {
    color: "#fff",
  },
  whiteOpacity: {
    opacity: 0.5,
  },
});
