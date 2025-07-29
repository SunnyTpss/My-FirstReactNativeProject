import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

function SignUp() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const handleSubmit = () => {
        if (form.password !== form.confirmPassword) {
            Alert.alert('Error', 'Passwords do not match!');
            return;
        }

        // Handle your signup logic here (e.g., API call)
        Alert.alert('Success', `Welcome ${form.name || form.username}!`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.heading}>Sign Up</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={form.name}
                    onChangeText={(text) => handleChange('name', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={form.email}
                    onChangeText={(text) => handleChange('email', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={form.username}
                    onChangeText={(text) => handleChange('username', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={form.password}
                    onChangeText={(text) => handleChange('password', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={form.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                />

                <Button title="Sign Up" onPress={handleSubmit} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    container: {
        padding: 24,
        flexGrow: 1,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
});
