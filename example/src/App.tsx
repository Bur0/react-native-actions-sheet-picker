import React, { useState, useMemo, useEffect } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';

/*
 **Example data:
 */
import country from './countrys.json';

export default function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setData(country);
  }, []);

  /*
   **Example filter function
   * @param {string} filter
   */
  const filteredData = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item) =>
        item.name
          .toLocaleLowerCase('en')
          .includes(query.toLocaleLowerCase('en'))
      );
    }
  }, [data, query]);

  /*
   **Input search
   *@param {string} text
   */
  const onSearch = (text) => {
    setQuery(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onOpen('country');
        }}
      >
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>Chosen : {JSON.stringify(selected)}</Text>
      <Picker
        id="country"
        data={filteredData}
        inputValue={query}
        searchable={true}
        placeholderTextColor="#8B93A5"
        label="Select Country"
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
});
