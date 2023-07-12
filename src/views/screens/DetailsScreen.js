import React from 'react'
import { SafeAreaView, View, StatusBar, Text, ImageBackground, StyleSheet } from 'react-native'
import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DetailsScreen = ({ navigation, route }) => {
  const data = route.params
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white,}}>
      <StatusBar translucent backgroundColor="transparent" barStyle = 'light-content'/>
      <ImageBackground 
      style={styles.headerImage}
      source={data.image}
      >
        <View style={styles.header}>
            <Icon name="chevron-left" size={30} color={COLORS.white} onPress={() => navigation.goBack()}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  headerImage: {
      position: 'absolute',
      height: 400,
      width: '100%',
      borderBottomRightRadius: 60,
      overflow:'hidden',
  },
  header: {
    padding: 20,
    flexDirection :'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
  }
})
export default DetailsScreen
