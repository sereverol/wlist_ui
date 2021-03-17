import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Value } from 'react-native-reanimated';

const Login = () => {
	const [state, setstate] = useState({
		email: '',
		password: '',
	});

	const handleChangeText = (name, Value) => {
		setstate({ ...state, [name]: Value });
	};

	return (
		<ScrollView style={styles.container}>
			<View>
				<TextInput
					style={styles.inputGroup}
					placeholder='Email'
					keyboardType='email-address'
					onChangeText={(Value) => handleChangeText('email', Value)}
				/>
				<TextInput
					style={styles.inputGroup}
					placeholder='Password'
					secureTextEntry={true}
					onChangeText={(Value) => handleChangeText('password', Value)}
				/>
				<Button title='Sign In' onPress={() => console.log(state)} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 35,
	},
	inputGroup: {
		flex: 1,
		padding: 0,
		marginBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
});

export default Login;
