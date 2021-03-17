import React, { Fragment, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	Button,
} from 'react-native';
import axios from 'axios';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const handleChangeText = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const onRegister = async () => {
		if (password !== password2) {
			console.log('Passwords do not match');
		} else {
			const newUser = {
				name,
				email,
				password,
			};

			try {
				await fetch('http://localhost:3000/api/users', {
					method: 'post',
					mode: 'cors',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: {
						name: 'test',
						email: 'test@test.com',
						password: '123456',
					},
				});
				// const config = {
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// };

				// const body = JSON.stringify(newUser);

				// console.log(body, config);

				// const res = await axios.post(
				// 	'http://localhost:3000/api/users',
				// 	body,
				// 	config
				// );
				// console.log(res.data);
			} catch (err) {
				console.error(err.response.data);
			}
		}
	};
	return (
		<ScrollView style={styles.container}>
			<View>
				<Text style={{ marginBottom: 50 }}>
					<Text style={{ fontSize: 30 }}>Sign Up</Text>
					{'\n'}
					{'\n'}
					<Text style={{ fontSize: 15 }}>Create your account</Text>
				</Text>
				<TextInput
					style={styles.inputGroup}
					placeholder='Name'
					name='name'
					onChangeText={(value) => handleChangeText('name', value)}
				/>
				<TextInput
					style={styles.inputGroup}
					placeholder='Email'
					keyboardType='email-address'
					onChangeText={(value) => handleChangeText('email', value)}
				/>
				<TextInput
					style={styles.inputGroup}
					placeholder='Password'
					secureTextEntry={true}
					onChangeText={(value) => handleChangeText('password', value)}
				/>
				<TextInput
					style={styles.inputGroup}
					placeholder='Confirm Password'
					secureTextEntry={true}
					onChangeText={(value) => handleChangeText('password2', value)}
				/>
				<Button title='Sign In' onPress={(e) => onRegister()} />
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

export default Register;
