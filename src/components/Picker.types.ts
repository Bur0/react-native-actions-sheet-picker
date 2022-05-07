export interface PickerProps {
  data?: [];
  id: string;
  placeholderText?: string;
  searchable?: boolean;
  onSearch?: (value: string) => void;
  label?: string;
  closeText?: string;
  setSelected?: any;
  loading?: boolean;
  height?: number;
  inputValue?: string;
  noDataFoundText?: string;
}
