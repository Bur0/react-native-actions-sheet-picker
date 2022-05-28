import type { FlatListProps, TextInputProps } from 'react-native';
import type { ActionSheetProps } from 'react-native-actions-sheet';

type RenderItemProp<T> = {
  renderListItem: (item: T, index: number) => React.ReactElement;
};

export type PickerProps<T> = {
  id: string;
  data: T[];
  placeholderText?: string;
  searchable?: boolean;
  onSearch?: (value: string) => void;
  label?: string;
  placeholderTextColor?: string;
  closeText?: string;
  setSelected: (value: T) => void;
  loading?: boolean;
  height?: number;
  inputValue?: string;
  noDataFoundText?: string;
  searchInputProps?: TextInputProps;
  flatListProps?: FlatListProps<T>;
  actionsSheetProps?: ActionSheetProps;
} & (T extends { name: string }
  ? Partial<RenderItemProp<T>>
  : RenderItemProp<T>);
