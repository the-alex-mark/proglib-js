# DataColumn
Представляет схему столбца в [DataTable](./dataTable.md).

## Инициализация
```js
const Data = require('proglib').Data;
const DataColumn = Data.DataColumn;

// Инициализирует новый экземпляр объекта DataColumn, как строку типа, используя указанное имя столбца.
// 
// Параметры:
//    Name
//       Имя столбца.
let _column = new DataColumn(Name);
```

## Свойства
```js
// Возвращает имя столбца объекта DataColumn.
// 
// Возврат:
//    String
_column.Name;
```

## Методы
```js
// Возвращает тип для текущего экземпляра.
// 
// Возврат:
//    String
_column.GetType();
```