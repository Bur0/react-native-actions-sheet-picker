import React, { useRef, createRef, useState } from 'react';
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

export const onClose = (id: any) => {
  SheetManager.hide(id);
};

export const Picker = <T,>({
  id,
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
  searchInputProps,
  flatListProps,
  actionsSheetProps,
  renderListItem,
}: PickerProps<T>) => {
  const [selectedKey, setSelectedKey] = useState(null);

  const actionSheetRef = createRef<ActionSheet>();

  const scrollViewRef = useRef(null);

  const onClose = () => {
    SheetManager.hide(id);
  };

  const Item = ({ item, index }: any) => (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderColor: '#CDD4D9',
      }}
      onPress={() => {
        itemOnPress(item);
        setSelectedKey(index);
      }}
    >
      <Text style={{ fontWeight: selectedKey !== index ? 'normal' : 'bold' }}>
        {item.name ? item.name : null}
      </Text>
    </TouchableOpacity>
  );

  const itemOnPress = (item: T) => {
    setSelected(item);
    onClose();
  };

  const keyExtractor = (_item: T, index: number) => index.toString();

  return (
    <ActionSheet
      id={id}
      ref={actionSheetRef}
      indicatorColor={'transparent'}
      gestureEnabled={true}
      keyboardShouldPersistTaps="always"
      {...actionsSheetProps}
    >
      <SafeAreaView
        style={{
          height: height,
        }}
      >
        <FlatList<T>
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
                      {...searchInputProps}
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
          ListEmptyComponent={() => {
            if (!loading) {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingTop: 20,
                  }}
                >
                  <Text>{noDataFoundText}</Text>
                </View>
              );
            }
            return null;
          }}
          ref={scrollViewRef}
          nestedScrollEnabled={true}
          data={data}
          renderItem={({ item, index }) => {
            if (renderListItem) {
              return renderListItem(item, index);
            }

            return <Item item={item} index={index} />;
          }}
          keyExtractor={keyExtractor}
          onMomentumScrollEnd={() =>
            actionSheetRef.current?.handleChildScrollEnd()
          }
          {...flatListProps}
        />
      </SafeAreaView>
    </ActionSheet>
  );
};
