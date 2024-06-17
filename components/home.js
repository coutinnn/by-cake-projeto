import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput ,Button, Linking} from 'react-native';
import WhatsApp from './Whats';


const DATA = [
  {
    id: '1',
    nome: 'Bolo de Chocolate',
    preco: 'R$ 25,00',
    image: 'https://bakeandcakegourmet.com.br/uploads/site/receitas/bolo-de-chocolate-facil-e-barato-rspxk8nc.jpg',
  },
  {
    id: '2',
    nome: 'Bolo de Morango',
    preco: 'R$ 30,00',
    image: 'https://bambini.com.br/wp-content/uploads/2016/07/bolo-morango-nordeste.jpg',
  },
  {
    id: '3',
    nome: 'Bolo de Cenoura',
    preco: 'R$ 20,00',
    image: 'https://guiadacozinha.com.br/wp-content/uploads/2018/08/bolo-de-cenoura-recheado-350x230.jpg',
  },
  {
    id: '4',
    nome: 'Bolo de Limão',
    preco: 'R$ 22,00',
    image: 'https://assets.delirec.com/images%2FWE5KpbFgPpXG4G1au1W7fJ2LPMC3%2Frecipe%2Fa59f2f36-96e6-4507-8c2f-11b68063f7ce-Bolo-de-lim%C3%A3o--gallery-0',
  },
  {
    id: '5',
    nome: 'Bolo de Coco',
    preco: 'R$ 28,00',
    image: 'https://assets.delirec.com/images%2F7kvvCGhNNYQx63gkeQvUQTWB9zx2%2Frecipe%2Fb2f1d69f-cc95-4334-a42a-c19c56fa1683-Bolo-de-Coco-Fofinho--gallery-0',
  },
  {
    id: '6',
    nome: 'Bolo de fubá',
    preco: 'R$ 25,00',
    image: 'https://s2-receitas.glbimg.com/GDADinKyW8a4LTtwZyXlG1OiP_E=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/w/I/HzhyCkTqm1UoDynv8XDQ/bolo-de-fuba-fofino.jpg',
  },
  {
    id: '7',
    nome: 'Bolo de laranja',
    preco: 'R$ 25,00',
    image: 'https://s2-receitas.glbimg.com/F9dgqtXN9uu_YJvp8uV48PEnhBU=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/N/d/zEcoFRSqGbrt3F6uWpBQ/bolo-de-laranja-com-calda.jpg',
  },
  {
    id: '8',
    nome: 'Bolo de milho',
    preco: 'R$ 25,00',
    image: 'https://s2-receitas.glbimg.com/lmZ1rzJSyvBnFbF8rqNABLUH4L4=/0x0:1000x1000/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/u/G/XdyKcFS7aS15tOfre81g/fe9ed8-ec4936f25f3c4fdd99f3b66e0178a8b6-mv2.png',
  },
  {
    id: '9',
    nome: 'Bolo de baunilha',
    preco: 'R$ 25,00',
    image: 'https://www.receitasagora.com.br/wp-content/uploads/2022/06/receita-de-bolo-de-baunilha-430x305.jpg',
  },
  {
    id: '10',
    nome: 'Bolo de abacaxi',
    preco: 'R$ 25,00',
    image: 'https://s2-receitas.glbimg.com/Kgd-lmoOZlhcePewrCWr3f_WF1A=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/n/t/KA7uY5TtGCk2Jj7y7DBA/bolo-de-abacaxi-1-.jpg',
  },
  
];

const Home = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
      <Button onPress={WhatsApp} style={styles.button} title="comprar"/>

    </View>
    
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BY CAKE</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  
});

export default Home;



