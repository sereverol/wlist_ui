import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='register' component={Register} />
			<Stack.Screen name='login' component={Login} />
			<Stack.Screen name='dashboard' component={Dashboard} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
