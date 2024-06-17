import React from 'react';
import { View, Button, Linking, StyleSheet, Alert } from 'react-native';


const WhatsApp = () => {
    Linking.canOpenURL('https://wa.me/21964437242?text=quer+um+bolo')
      .then((supported) => {
        if (supported) {
          Linking.openURL('https://wa.me/21964437242?text=quer+um+bolo');
        } else {
          Alert.alert('WhatsApp não está instalado');
        }
      })
  };

  



export default WhatsApp;
