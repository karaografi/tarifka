import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import React from 'react'
import styles from "./Meal.style"
import {API_URL} from "@env"
import { MEAL_CATEGORIES_URL } from '../../constants/constants'
import useFetch from '../../hooks/useFetch'
import MealCard from '../../components/MealCard'

const Meal = ({navigation,route}) => {

  const {strCategory} = route.params;

  // console.log(strCategory)
  const {loading,error,data} = useFetch(`${API_URL}${MEAL_CATEGORIES_URL}${strCategory}`);


  // console.log(data)
  const handleMealSelect = idMeal =>{
    navigation.navigate("DetailPage", {idMeal})
  }

  if(loading){
    return <ActivityIndicator size="large" />
  }

  if(error) {
    return <Text>{error}</Text>
  }

  const renderMeal = ({item}) => <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />;
  return (
    <View style={styles.container}>
      {/* <Text>{strCategory}</Text> */}
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  )
}

export default Meal