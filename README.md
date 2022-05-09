# react-native-actions-sheet-picker

test

## Installation

```sh
npm install react-native-actions-sheet-picker
```

## Usage

## Options
| Properties|Type|Description|Default|
| --------------------------------- | ---------- | ------------------------------------------------------ | ------------------------------------------- |
|**id** <br> **required* |`string` |A unique id for the ActionSheet||
|**data**|`array`|Array of list items|`[]`|
|**inputValue**|`string`|The value to show for the text input. | |
|**searchable** |`boolean `| Searchable state |`false`|
|**loading**|`boolean`|Loading state|`false`|
|**label**|`string`|Flatlist label||
|**height**|`string`| ActionSheet height|`Dimensions.get('window').height * 0.5`|
|**closeText**|`string`|Close text|`"Close"`|
|**placeholderText**|`string`|Placeholder text|`"Search"`|
|**noDataFoundText**|`string`|No data found text|`"No Data Found.'"`|
|**placeholderTextColor**|`string`|Placeholder text color| `#8B93A5`|
## Core Props of using packages
| Properties           | Type     | Description                  | Default |
| -------------------- | -------- | ---------------------------- | ------- |
|**ActionsShetProps** |`object`|  [react-native-actions-sheet](https://github.com/ammarahm-ed/react-native-actions-sheet "react-native-actions-sheet")     |         |
|**FlatListProps**|`object`| React Native Flatlist Props  |         |
|**SearchInputProps**|`object`| React Native TextInput Props |      ||

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
