import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react'

interface ButtonProps {
    title: string;
    onPress: () => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4CAF50',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  
  export default Button;