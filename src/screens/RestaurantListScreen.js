import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import restaurants from '../data/restaurants.json';

const RestaurantListScreen = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    setRestaurantList(restaurants);
  }, []);

  const renderRestaurant = ({ item }) => (
    <View style={styles.restaurantCard}>
      <Text style={styles.restaurantName}>{item.name}</Text>
      <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>
      <FlatList
        data={restaurantList}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  restaurantCard: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantCuisine: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default RestaurantListScreen;
