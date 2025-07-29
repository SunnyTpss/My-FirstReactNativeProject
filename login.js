import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

function Login() {
    const [credentials, setCredentials] = useState({ emailOrUsername: '', password: '' });

    const handleChange = (key, value) => {
        setCredentials({ ...credentials, [key]: value });
    };

    const handleSubmit = () => {
        Alert.alert('Logging in as', credentials.emailOrUsername);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email or Username"
                value={credentials.emailOrUsername}
                onChangeText={(text) => handleChange('emailOrUsername', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={credentials.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            <Button title="Login" onPress={handleSubmit} />
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
    },
});
