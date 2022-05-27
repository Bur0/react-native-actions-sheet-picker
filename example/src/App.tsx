import React, { useState, useMemo, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';

/*
 **Example data:
 */
import countries from './countries.json';

type CountryInfo = typeof countries[number];

export default function App() {
  const [data, setData] = useState<CountryInfo[]>([]);
  const [selected, setSelected] = useState<CountryInfo | undefined>(undefined);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setData(countries);
  }, []);

  /*
   **Example filter function
   * @param {string} filter
   */
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLocaleLowerCase('en').includes(query.toLocaleLowerCase('en'))
    );
  }, [data, query]);

  /*
   **Input search
   *@param {string} text
   */
  const onSearch = (text: string) => {
    setQuery(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onOpen('country');
        }}
      >
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>Chosen : {JSON.stringify(selected)}</Text>
      <Picker
        id="country"
        data={filteredData}
        inputValue={query}
        searchable={true}
        label="Select Country"
        setSelected={setSelected}
        onSearch={onSearch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8B93A5',
    padding: 10,
    borderRadius: 6,
    marginTop: 50,
  },
});
