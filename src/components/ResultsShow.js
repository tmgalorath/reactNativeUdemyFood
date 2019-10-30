import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShow = ({ navigation }) => {
  const [result, setresult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setresult(response.data);
  };

  if (!result) {
    return null;
  }

  return (
    <>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {return <Image style={styles.image} source={{uri: item}}/>}}
      />
      <Text>{result.name}</Text>
    </>
  );
};
const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200

    }
});

export default ResultsShow;
