import React, { useRef, createRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { FlatList } from 'react-native-gesture-handler';

/* import { useSafeAreaInsets } from 'react-native-safe-area-context'; */

export const onOpen = (id) => {
  SheetManager.show(id);
};

export const Picker = ({
  data,
  id,
  placeholderText,
  searchable,
  onSearch,
  label,
  closeText,
  setSelected,
  loading = false,
  height = 400,
  inputValue,
  noDataFoundText,
}) => {
  const onClose = () => {
    SheetManager.hide(id);
  };

  const actionSheetRef = createRef();
  const scrollViewRef = useRef(null);
  /*const insets = useSafeAreaInsets();*/

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <View style={{ borderBottomWidth: 0.5, borderColor: '#CDD4D9' }}>
      <TouchableOpacity
        style={{ paddingVertical: 20 }}
        onPress={() => {
          setSelected(item);
          onClose();
        }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  const keyExtractor = (_item: any, index: { toString: () => any }) =>
    index.toString();

  return (
    <ActionSheet
      ref={actionSheetRef}
      indicatorColor={'transparent'}
      gestureEnabled={true}
      id={id}
    >
      <View
        style={{
          height: height,
        }}
      >
        <FlatList
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
                      placeholderTextColor="#8B93A5"
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
