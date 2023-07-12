import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import COLORS from "../../consts/colors";
import collections from "../../consts/colections";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ColorSpace } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const Card = ({ data, navigation }) => {
  return (
    <TouchableOpacity 
    
    onPress={() => navigation.navigate('DetailsScreen', data)}
    activeOpacity={0.7} style={styles.card}>
      <Icon
        name="heart-outline"
        size={28}
        color={COLORS.white}
        style={{ position: "absolute", zIndex: 1, right: 10, top: 20 }}
      />
      <Image
        style={{ height: "100%", width: "100%", borderRadius: 20 }}
        source={data.image}
      />
      <View style={styles.cardDetailsCont}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 25, width: 25, borderRadius: 25 }}
            source={require("../../assets/eth.png")}
          />
          <Text
            style={{
              marginLeft: 2,
              fontSize: 12,
              fontWeight: "bold",
              color: COLORS.white,
            }}
          >
            {data.price}
          </Text>
        </View>
        <View style={styles.cardBtn}>
          <Text
            style={{ color: COLORS.white, fontSize: 10, fontWeight: "bold" }}
          >
            Buy Now
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TrendingCard = ({ data }) => {
  return (
    <View style={styles.trendingCard}>
      <Image
        style={{
          height: 80,
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={data.image}
      />
      <View style={{ height: 70, width: '100%', alignItems: 'center'}}>
        <Image 
        style={styles.creatorImage}
        source={data.creatorImage}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', top: -20}}>
          <Text style={{fontWeight: 'bold', color: COLORS.black,marginRight: 2}}>{data.creator}</Text>
          <Icon name="check-decagram" color={COLORS.violet}/>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.header}>
        <View style={styles.priceTag}>
          <Image
            style={{ height: 20, width: 20, borderRadius: 20 }}
            source={require("../../assets/eth.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.white,
              marginLeft: 5,
              fontSize: 12,
            }}
          >
            22.6
          </Text>
        </View>
        <Image
          style={{ height: 40, width: 40, borderRadius: 40 }}
          source={require("../../assets/person.jpg")}
        />
      </View>
      <ScrollView>
        <Text style={styles.title}>Top NFTS</Text>
        <FlatList
        keyExtractor={(index) => index.id}
          snapToInterval={width * 0.55}
          decelerationRate="fast"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
          data={collections}
        />
        <Text style={styles.title}>Trending collections</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TrendingCard data={item} navigation={navigation} />
          )}
          data={collections}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceTag: {
    height: 25,
    width: 70,
    backgroundColor: COLORS.violet,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  title: {
    margin: 20,
    fontWeight: "bold",
    color: COLORS.black,
    fontSize: 22,
  },
  card: {
    height: 300,
    width: width * 0.55,
    backgroundColor: COLORS.white,
    marginLeft: 20,
    elevation: 10,
    shadowColor: COLORS.grey,
    shadowRadius: 10,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 7,
    borderRadius: 20,
    borderColor: COLORS.white,
  },
  cardDetailsCont: {
    height: 70,
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.4)",
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cardBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.violet,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 20,
  },
  trendingCard: {
    height: 150,
    width: 180,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 10,
    shadowColor: COLORS.grey,
    shadowRadius: 10,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.2,
    marginLeft: 20
  },
  creatorImage: {
    height: 45,
    width: 45,
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: 45,
    top: -20 
  }
});
export default HomeScreen;
