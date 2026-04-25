import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
export default function MoviesList({ route, navigation }) {
  const { cityName } = route.params;
  const [cat, setCat] = useState('Now Showing');
  const movies = [
    { id: '1', name: "Vaazha 2: Biopic of a Billion Bros", genre: "Comedy / Drama", rating: "4.5", duration: "2h 10m", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Vaazha_poster.jpg/220px-Vaazha_poster.jpg" },
    { id: '2', name: "Leo", genre: "Action / Thriller", rating: "4.8", duration: "2h 44m", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Leo_Tamil_poster.jpg/220px-Leo_Tamil_poster.jpg" },
    { id: '3', name: "Jailer", genre: "Action / Comedy", rating: "4.7", duration: "2h 48m", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Jailer_2023_Tamil_film_poster.jpg/220px-Jailer_2023_Tamil_film_poster.jpg" }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.backBtn}>{"< Back"}</Text></TouchableOpacity>
        <Text style={styles.headerLoc}>📍 {cityName}</Text>
      </View>
      <View style={styles.catBox}>
        {['Now Showing', 'Coming Soon'].map((c) => (
          <TouchableOpacity key={c} onPress={() => setCat(c)}><Text style={[styles.catText, cat === c && styles.activeCat]}>{c}</Text></TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={movies} keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Showtime", { cityName, movie: item })}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.mTitle}>{item.name}</Text>
              <Text style={styles.mGenre}>{item.genre}</Text>
              <Text style={styles.mRating}>⭐ {item.rating}   🕒 {item.duration}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15, paddingTop: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  backBtn: { fontSize: 16, color: '#E50914' },
  headerLoc: { fontSize: 16, fontWeight: 'bold' },
  catBox: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 10 },
  catText: { fontSize: 16, color: '#666' },
  activeCat: { color: '#E50914', fontWeight: 'bold', borderBottomWidth: 2, borderColor: '#E50914' },
  card: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10 },
  img: { width: 80, height: 120, borderRadius: 8 },
  info: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  mTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  mGenre: { fontSize: 14, color: '#666', marginBottom: 10 },
  mRating: { fontSize: 12, color: '#333', fontWeight: '500' }
});
