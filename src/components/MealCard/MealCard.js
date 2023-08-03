import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./MealCard.style"

const MealCard = ({ meal, onSelect }) => {

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>

        <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
        <View style={styles.body_container}>
        </View>
        <Text style={styles.title}>{meal.strMeal}</Text>
        
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MealCard