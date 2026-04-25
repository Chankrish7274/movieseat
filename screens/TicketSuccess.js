import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TicketSuccess({ route, navigation }) {
  const { cityName, movie, date, theater, time, seats, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✓ Booking Confirmed!</Text>
      <Text style={styles.quote}>"Enjoy your movie!" - Sent by Chandru</Text>

      <View style={styles.card}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Image source={{uri: movie.img}} style={{width: 60, height: 80, borderRadius: 8}} />
          <View style={{marginLeft: 15, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{movie.name}</Text>
            <Text style={{color: '#666'}}>{cityName} • {theater}</Text>
          </View>
        </View>

        <Text style={styles.row}>Date & Time: {date} @ {time}</Text>
        <Text style={styles.row}>Seats: {seats.join(', ')}</Text>
        <Text style={styles.row}>Total Paid: ₹{total}</Text>
        
        <Text style={styles.barcode}>|| | ||| | || | | || |||</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.reset({index: 0, routes: [{name: 'City'}]})}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 60, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50', marginBottom: 5 },
  quote: { fontSize: 16, color: '#666', marginBottom: 30, fontStyle: 'italic' },
  card: { backgroundColor: '#fff', width: '100%', padding: 20, borderRadius: 15, elevation: 5, marginBottom: 30 },
  row: { fontSize: 16, marginBottom: 10, fontWeight: '500' },
  barcode: { fontSize: 35, textAlign: 'center', marginTop: 20, letterSpacing: 2 },
  btn: { backgroundColor: '#E50914', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
