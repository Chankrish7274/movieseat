import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, SafeAreaView, Image } from 'react-native';
export default function Login({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => { Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start(); }, [fadeAnim]);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.animBox, { opacity: fadeAnim }]}>
        <Text style={styles.logoText}>🍿 Daivtech Movies</Text>
        <Text style={styles.subText}>Book your tickets instantly</Text>
      </Animated.View>
      <View style={{ width: '100%' }}>
        <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.replace("City")}>
          <Text style={styles.loginBtnText}>Login to Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgRow}>
         <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Vaazha_poster.jpg/220px-Vaazha_poster.jpg'}} style={styles.img} />
         <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Leo_Tamil_poster.jpg/220px-Leo_Tamil_poster.jpg'}} style={styles.img} />
         <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Jailer_2023_Tamil_film_poster.jpg/220px-Jailer_2023_Tamil_film_poster.jpg'}} style={styles.img} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 20 },
  animBox: { alignItems: 'center', marginBottom: 50 },
  logoText: { fontSize: 32, fontWeight: 'bold', color: '#E50914', marginBottom: 10 },
  subText: { fontSize: 16, color: '#666' },
  input: { backgroundColor: '#f5f5f5', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 },
  loginBtn: { backgroundColor: '#E50914', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  loginBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  imgRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 60, opacity: 0.8 },
  img: { width: 80, height: 120, borderRadius: 10 }
});
