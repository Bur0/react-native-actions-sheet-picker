import React, { useState, useMemo, useEffect } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';

import country from './countrys.json';

export default function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setData(country);
  }, []);

  const filteredData = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item) =>
        item.name
          .toLocaleLowerCase('en')
          .includes(filter.toLocaleLowerCase('en'))
      );
    }
  }, [data, filter]);

  const onSearch = (text) => {
    setFilter(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onOpen('country');
        }}
      >
        <Text>Open the modal {filter}</Text>
      </TouchableOpacity>
      <Text>Selected : {JSON.stringify(selected)}</Text>
      <Picker
        id="country"
        label="Select Country"
        searchable={true}
        data={filteredData}
        inputValue={filter}
        placeholderTextColor="#8B93A5"
        loading={false}
        setSelected={setSelected}
        onSearch={onSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
