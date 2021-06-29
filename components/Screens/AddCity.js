import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function AddCity({navigation}) {
	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const handleClick = () => {
		alert('Country and city is added!');
		const pushedData = {country: country, city: city, locations: []};
		setData(data => [pushedData, ...data]);
	}
	return (
		<View style={styles.container}>
			<Text style={styles.secondhead}>Enter Country </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCountry(text)}
			
			/>
			<Text style={styles.secondhead}> Enter City Name </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCity(text)}
			
			/>
			<TouchableOpacity
				style={styles.button}
			>
				<Text style={styles.head} onPress={handleClick}>Add city to list</Text>
        
			</TouchableOpacity>
      
			<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.head} onPress={() => navigation.navigate('Cities')}>View list of cities</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 24,
    backgroundColor: '#c242b5',
  },
  input: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    color: 'white',
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#deadd9',
    padding: 10,
    width: 170,
  },
  footbutton: {
    marginLeft: 0,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#deadd9',
    padding: 10,
    width: 170,
    height: 50,
  },
  head: {
    marginBottom: 5,
    color: '#324AB2',
    fontSize: 18,
 },
  secondhead: {
   color: 'white',
    fontSize: 18,
    width: 140,

 },
});