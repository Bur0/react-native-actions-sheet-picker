import React, { useRef, createRef } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Text,
} from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { FlatList } from 'react-native-gesture-handler';

import type { PickerProps } from './Picker.types';

/* import { useSafeAreaInsets } from 'react-native-safe-area-context'; */

export const onOpen = (id: any) => {
  SheetManager.show(id);
};

export const Picker: React.FC<PickerProps> = ({
  id,
  data,
  inputValue,
  searchable,
  loading = false,
  onSearch,
  label,
  setSelected,
  height = 400,
  closeText = 'Close',
  placeholderText = 'Search',
  noDataFoundText = 'No Data Found',
  placeholderTextColor = '#8B93A5',
}) => {
  const onClose = () => {
    SheetManager.hide(id);
  };

  const actionSheetRef = createRef<any>();

  const scrollViewRef = useRef(null);
  /*const insets = useSafeAreaInsets();*/

  const renderItem = ({ item }: any) => <Item item={item} />;

  const Item = ({ item }: any | undefined) => (
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

  const ItemOnPress = (item) => {
    setSelected(item);
    onClose();
  };

  const keyExtractor = (_item: any, index: { toString: () => any }) =>
    index.toString();

  return (
    <ActionSheet
      ref={actionSheetRef}
      indicatorColor={'transparent'}
      gestureEnabled={true}
      keyboardShouldPersistTaps="handled"
      id={id}
    >
      <View
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
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexBasis: '75%' }}>
                  {searchable ? (
                    <TextInput
                      style={{
                        height: 40,
                        borderWidth: 1,
                        borderColor: '#CDD4D9',
                        borderRadius: 6,
                        padding: 10,
                      }}
                      value={inputValue}
                      placeholderTextColor={placeholderTextColor}
                      onChangeText={onSearch}
                      placeholder={placeholderText}
                      clearButtonMode="always"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  ) : null}
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
              <View style={{ marginTop: 20, paddingBottom: 5 }}>
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
      </View>
    </ActionSheet>
  );
};
