import { View, Text, FlatList,ActivityIndicator} from 'react-native'
import React from 'react'

import styles from "./Category.style"
import useFetch from '../../hooks/useFetch'
import {API_URL} from "@env"
import { CATEGORIES_URL } from '../../constants/constants'
import CategoryCard from '../../components/CategoryCard'


const Category = ({navigation}) => {

  const {loading,error,data} = useFetch(`${API_URL}${CATEGORIES_URL}`);

  // console.log(data.categories);
  const handleCategorySelect = (id,strCategory) => {
    navigation.navigate('Meal',
    {id,
    strCategory
    })
  }
  
  const renderCategory = ({item}) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.id,item.strCategory)} />;
 


  if(loading){
    return <ActivityIndicator size="large" />
  }

  if(error){
    return <Text>{error}</Text>
  } 
 
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  )
}

export default Category