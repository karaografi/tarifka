import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from "./CategoryCard.style"

const CategoryCard = ({category,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:category.strCategoryThumb}} />
        <Text style={styles.title}>{category.strCategory}</Text>
        
        {/* <Text style={styles.desc}>{category.strCategoryDescription}</Text> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryCard