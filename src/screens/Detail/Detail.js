import { View, Text, Image, ActivityIndicator, TouchableOpacity,Linking  } from 'react-native'
import React, { useCallback } from 'react'
import useFetch from '../../hooks/useFetch';
import { API_URL } from "@env"
import { MEAL_SINGLE_URL } from '../../constants/constants';
import styles from "./Detail.style"
import { ScrollView } from 'react-native-gesture-handler';



const Detail = ({ route }) => {

  const { idMeal } = route.params;

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Can't handle this URL: ${url}`);
      }
    }, [url]);
    return <TouchableOpacity style={styles.button} onPress={handlePress}>{children}</TouchableOpacity>;
  };

  const { loading, error, data } = useFetch(`${API_URL}${MEAL_SINGLE_URL}${idMeal}`)

  const mealData = data?.meals?.[0];

  if (loading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>{error}</Text>
  }



  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: mealData.strMealThumb }} />
      <Text style={styles.title}>{mealData.strMeal}</Text>
      <Text style={styles.desc}>{mealData.strInstructions}</Text>
      <Text style={styles.ingredient}>{mealData.strIndgredient1}</Text>
      <OpenURLButton url={mealData.strYoutube}>
        <Text style={styles.buttonText}>Watch on Youtube</Text>
      </OpenURLButton>
    </ScrollView>
  )
}

export default Detail