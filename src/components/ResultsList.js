import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail'


const ResultsList = ({title, results, navigation}) => {
    if (!results.length) {
        return null
    }
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5,
    }
})

export default withNavigation(ResultsList);
