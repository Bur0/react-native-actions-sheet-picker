import React, { useRef, createRef } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Text,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { FlatList } from 'react-native-gesture-handler';

import type { PickerProps } from './Picker.types';

export const onOpen = (id: any) => {
  SheetManager.show(id);
};

export const Picker: React.FC<PickerProps> = ({
  id = null,
  data = [],
  inputValue,
  searchable = false,
  loading = false,
  label,
  height = Dimensions.get('window').height * 0.5,
  closeText = 'Close',
  placeholderText = 'Search',
  noDataFoundText = 'No Data Found.',
  placeholderTextColor = '#8B93A5',
  setSelected,
  onSearch,
}) => {
  const onClose = () => {
    SheetManager.hide(id);
  };

  const actionSheetRef = createRef<any>();

  const scrollViewRef = useRef(null);

  const renderItem = ({ item }: any) => <Item item={item} />;

  const Item = ({ item }: any) => (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderColor: '#CDD4D9',
      }}
      onPress={() => {
        ItemOnPress(item);
      }}
    >
      <Text>{item.name ? item.name : null}</Text>
    </TouchableOpacity>
  );

  const ItemOnPress = (item: any) => {
    setSelected(item);
    onClose();
  };

  const keyExtractor = (_item: any, index: { toString: () => any }) =>
    index.toString();

  return (
    <ActionSheet
      id={id}
      ref={actionSheetRef}
      indicatorColor={'transparent'}
      gestureEnabled={true}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView
        style={{
          height: height,
        }}
      >
        <FlatList
          disableScrollViewPanResponder={true}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <View
              style={{
                backgroundColor: '#ffffff',
              }}
            >
              {searchable ? (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}
                >
                  <View style={{ flexBasis: '75%' }}>
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        borderColor: '#CDD4D9',
                        borderRadius: 6,
                        padding: 10,
                        color: '#333',
                      }}
                      value={inputValue}
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={onSearch}
                      placeholder={placeholderText}
                      clearButtonMode="always"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>

                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => {
                      onClose();
                    }}
                  >
                    <Text>{closeText}</Text>
                  </TouchableOpacity>
                </View>
              ) : null}

              <View style={{ marginTop: 10, paddingBottom: 5 }}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}
                >
                  {label}
                </Text>
              </View>

              {loading ? (
                <ActivityIndicator
                  style={{ marginVertical: 20 }}
                  color="#999999"
                />
              ) : null}
            </View>
          }
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 20,
              }}
            >
              <Text>{noDataFoundText}</Text>
            </View>
          }
          ref={scrollViewRef}
          nestedScrollEnabled={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onMomentumScrollEnd={() =>
            actionSheetRef.current?.handleChildScrollEnd()
          }
        />
      </SafeAreaView>
    </ActionSheet>
  );
};
