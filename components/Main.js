import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
    const [news, setNews] = useState([
      { name: 'Космическая Пыль', anons: 'Космическая пыль уничтожит Землю через...', full: 'Это была шутка(наверное)', key: '1', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80' },
      { name: 'Красиво', anons: 'Красиво', full: 'Красиво', key: '2', img: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80' },
      { name: 'Очень Красиво', anons: 'Очень Красиво', full: 'Очень Красиво', key: '3', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80' },
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
      setNews((list) => {
        arctile.key = Math.random().toString();
        return [
          article,
          ...list
        ]
      });
      setModalWindow(false);
    }

    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
          <View style={gStyle.main}>
            <Ionicons name="close" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)} />
            <Text style={styles.title}>Форма добавления статей</Text>
            <form />
          </View>
        </Modal>
        <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
            <Image style={styles.image} source={{uri: item.img}} />
            <Text style={styles.title}>{ item.name }</Text>
            <Text style={styles.anons}>{ item.anons }</Text>
          </TouchableOpacity>
        )} />
      </View>
    );
}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'center',
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    marginBottom: 30
  }, item: {
    width: '100%',
    marginBottom: 30
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20, 
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5, 
    color: '#474747'
  }
});
