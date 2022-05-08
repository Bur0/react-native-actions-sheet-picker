export interface PickerProps {
  data?: never[] | undefined;
  id: string;
  placeholderText?: string;
  searchable?: boolean;
  onSearch?: (value: string) => void;
  label?: string;
  placeholderTextColor?: string;
  closeText?: string;
  setSelected?: any;
  loading?: boolean;
  height?: number;
  inputValue?: string;
  noDataFoundText?: string;
}
