import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
export default function PickSeats({ route, navigation }) {
  const { cityName, movie, date, theater, time } = route.params;
  const [sel, setSel] = useState([]);
  const booked = ['B3', 'C4', 'E1', 'E2'];
  function toggle(id) {
    if (booked.includes(id)) return;
    setSel(sel.includes(id) ? sel.filter(s => s !== id) : [...sel, id]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.backBtn}>{"< Back"}</Text></TouchableOpacity>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.sub}>{date} | {time}</Text>
      </View>
      <View style={styles.screenBox}><Text style={styles.screenTxt}>SCREEN THIS WAY</Text></View>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }}>
        {['A', 'B', 'C', 'D', 'E'].map((r) => (
          <View key={r} style={styles.row}>
            <Text style={styles.rowTxt}>{r}</Text>
            {[1, 2, 3, 4, 5].map((c) => {
              const id = `${r}${c}`;
              const isB = booked.includes(id);
              return (
                <TouchableOpacity key={id} style={[styles.seat, isB ? styles.bSeat : sel.includes(id) ? styles.sSeat : styles.aSeat]} onPress={() => toggle(id)} activeOpacity={isB ? 1 : 0.7}>
                  <Text style={{ fontSize: 12, color: '#fff' }}>{c}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View><Text style={styles.tLabel}>Total Price</Text><Text style={styles.tPrice}>₹ {sel.length * 200}</Text></View>
        <TouchableOpacity style={styles.btn} onPress={() => {
          if (!sel.length) return alert("Select a seat");
          navigation.navigate("Confirmation", { ...route.params, selectedSeats: sel, total: sel.length * 200 });
        }}><Text style={styles.btnTxt}>Continue</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 30 },
  header: { padding: 20, alignItems: 'center' },
  backBtn: { position: 'absolute', left: 20, top: 20, color: '#E50914', fontSize: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  sub: { color: '#666', marginTop: 5 },
  screenBox: { backgroundColor: '#f0f0f0', padding: 10, alignItems: 'center', marginHorizontal: 40, borderRadius: 20, marginBottom: 30 },
  screenTxt: { color: '#999', fontSize: 12, letterSpacing: 2 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  rowTxt: { width: 30, fontSize: 16, fontWeight: 'bold', color: '#666' },
  seat: { width: 40, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5, borderWidth: 1 },
  aSeat: { backgroundColor: '#fff', borderColor: '#E50914' },
  bSeat: { backgroundColor: '#ccc', borderColor: '#ccc' },
  sSeat: { backgroundColor: '#E50914', borderColor: '#E50914' },
  footer: { position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#eee' },
  tLabel: { color: '#666', fontSize: 14 },
  tPrice: { fontSize: 22, fontWeight: 'bold' },
  btn: { backgroundColor: '#E50914', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, justifyContent: 'center' },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
