# React Native Actions Sheet Picker

test

## Preview

<img
width="%33"
height="600"
src="https://github.com/Bur0/react-native-actions-sheet-picker/blob/master/gifs/ios-default.gif"
/>
<img
width="%33"
height="600"
src="https://github.com/Bur0/react-native-actions-sheet-picker/blob/master/gifs/ios-searchable.gif"
/>

## Installation Guide

```sh
yarn add react-native-actions-sheet-picker
```

or

```sh
npm install react-native-actions-sheet-picker
```

## Install Dependencies

Please, install dependencies for using this package.

```sh
yarn add yarn add react-native-actions-sheet
```

```sh
yarn add yarn add react-native-gesture-handler
```

## Usage

## Options

| Properties               | Type       | Description                           | Default                                 |
| ------------------------ | ---------- | ------------------------------------- | --------------------------------------- |
| **id** <br> \*_required_ | `string`   | A unique id for the ActionSheet       |                                         |
| **data**                 | `array`    | Array of list items                   | `[]`                                    |
| **inputValue**           | `string`   | The value to show for the text input. |                                         |
| **searchable**           | `boolean ` | Searchable state                      | `false`                                 |
| **loading**              | `boolean`  | Loading state                         | `false`                                 |
| **label**                | `string`   | Flatlist label                        |                                         |
| **height**               | `string`   | ActionSheet height                    | `Dimensions.get('window').height * 0.5` |
| **closeText**            | `string`   | Close text                            | `"Close"`                               |
| **placeholderText**      | `string`   | Placeholder text                      | `"Search"`                              |
| **noDataFoundText**      | `string`   | No data found text                    | `"No Data Found.'"`                     |
| **placeholderTextColor** | `string`   | Placeholder text color                | `#8B93A5`                               |
| **setSelected**          | `function` | Selected function                     |                                         |
| **onSearch**             | `function` | Textinput search function             |                                         |

## Core Props of using packages


| Properties           | Type     | Description                                                                                                          |
| -------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| **ActionsShetProps** | `object` | [react-native-actions-sheet](https://github.com/ammarahm-ed/react-native-actions-sheet 'react-native-actions-sheet') |     |
| **FlatListProps**    | `object` | [FlatListProps](https://reactnative.dev/docs/flatlist 'FlatListProps')                                               |     |
| **SearchInputProps** | `object` | [TextInputProps](https://reactnative.dev/docs/textinput 'TextInputProps')                                            |     |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
