import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
export default function TicketSuccess({ route, navigation }) {
  const { cityName, movie, date, theater, time, selectedSeats, total } = route.params;
  const bookingId = "BK" + Math.floor(Math.random() * 1000000);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.head}>
          <View style={styles.icon}><Text style={styles.check}>✓</Text></View>
          <Text style={styles.title}>Booking Confirmed!</Text>
          <Text style={styles.sub}>"Enjoy your movie!" - Sent by Chandru</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.mHead}>
            <Image source={{ uri: movie.image }} style={styles.img} />
            <View style={styles.mInfo}><Text style={styles.mTitle}>{movie.name}</Text><Text style={styles.mSub}>{cityName}</Text></View>
          </View>
          <View style={styles.div} />
          <View style={styles.grid}>
            <View style={styles.item}><Text style={styles.lbl}>Date</Text><Text style={styles.val}>{date}</Text></View>
            <View style={styles.item}><Text style={styles.lbl}>Time</Text><Text style={styles.val}>{time}</Text></View>
            <View style={styles.item}><Text style={styles.lbl}>Theater</Text><Text style={styles.val}>{theater}</Text></View>
            <View style={styles.item}><Text style={styles.lbl}>Seats</Text><Text style={styles.val}>{selectedSeats.join(', ')}</Text></View>
            <View style={styles.item}><Text style={styles.lbl}>Total</Text><Text style={styles.val}>₹{total}</Text></View>
            <View style={styles.item}><Text style={styles.lbl}>Booking ID</Text><Text style={styles.val}>{bookingId}</Text></View>
          </View>
          <View style={styles.div} />
          <View style={styles.barBox}>
            <Text style={styles.bar}>|| | ||| | || | | || ||| | ||</Text><Text style={styles.barSub}>Scan at the entrance</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'City' }] })}>
          <Text style={styles.btnTxt}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scroll: { padding: 20, alignItems: 'center', marginTop: 20 },
  head: { alignItems: 'center', marginBottom: 30 },
  icon: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  check: { color: '#fff', fontSize: 30, fontWeight: 'bold' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  sub: { fontSize: 14, color: '#666' },
  card: { width: '100%', backgroundColor: '#fff', borderRadius: 15, padding: 20, elevation: 5, marginBottom: 30 },
  mHead: { flexDirection: 'row', marginBottom: 20 },
  img: { width: 60, height: 80, borderRadius: 8 },
  mInfo: { marginLeft: 15, justifyContent: 'center' },
  mTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  mSub: { fontSize: 14, color: '#666' },
  div: { height: 1, backgroundColor: '#eee', marginVertical: 15, borderStyle: 'dashed' },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  item: { width: '50%', marginBottom: 15 },
  lbl: { fontSize: 12, color: '#999', marginBottom: 3 },
  val: { fontSize: 14, fontWeight: '600', color: '#333' },
  barBox: { alignItems: 'center', marginVertical: 10 },
  bar: { fontSize: 30, fontWeight: 'bold', letterSpacing: 3, color: '#333' },
  barSub: { fontSize: 12, color: '#999', marginTop: 5 },
  btn: { width: '100%', backgroundColor: '#E50914', paddingVertical: 15, borderRadius: 10, alignItems: 'center' },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
