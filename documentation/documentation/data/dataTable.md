# DataTable
Представляет таблицу с данными.

## Инициализация
```js
const Data = require('proglib').Data;
const DataTable = Data.DataTable;

// Инициализирует новый экземпляр класса DataTable с указанным именем таблицы.
// 
// Параметры:
//    [Name]
//       Имя таблицы.
let _table = new DataTable(Name);
```

## Свойства
```js
// Возвращает или задает имя DataTable.
// 
// Возврат:
//    String
_table.Name;

// Получает коллекцию столбцов, принадлежащих данной таблице.
// 
// Возврат:
//    DataColumnCollection
_table.Columns;

// Получает коллекцию строк, принадлежащих данной таблице.
// 
// Возврат:
//    DataRowCollection
_table.Rows;

// Показывает, учитывается ли регистр при сравнении строк в таблице.
// 
// Возврат:
//    Boolean
_table.CaseSensitive;
```

## Методы
```js
// Очищает DataTable от всех данных.
_table.Clear();

// Преобразует данные таблицы в строчное представление.
// 
// Параметры:
//    [Style]
//       Стиль строчного представления таблицы (по умолчанию "Default").
//       Возможные значения: "Name", "Default", "MarkDown", "Alternative", "Minimal"
_table.toString();

// Возвращает тип для текущего экземпляра.
// 
// Возврат:
//    String
_row.GetType();
```

## События
```js
// Происходит, когда вставляется новая строка DataRow.
Table.on('TableTableNewRow', (e) => {
    console.log(e.Index);
    console.log(e.Row);
});

// Происходит перед удалением строки таблицы.
Table.on('TableRowDeleting', (e) => {
    console.log(e.Index);
    console.log(e.Row);
});

// Происходит после удаления строки таблицы.
Table.on('TableRowDeleted', () => {
    
});

// Происходит, когда очищается таблица DataTable.
Table.on('TableClearing', (e) => {
    console.log(e.Rows);
});

// Происходит после очистки DataTable.
Table.on('TableCleared', () => {
    
});

// Происходит, когда вставляется новый столбец DataColumn. 
Table.on('TableNewColumns', (e) => {
    console.log(e.Index);
    console.log(e.Columns);
});

// Происходит перед удалением столбца.
Table.on('TableColumnDeleting', (e) => {
    console.log(e.Index);
    console.log(e.Columns);
});

// Происходит после удаления столбца
Table.on('TableColumnDeleted', () => {
    
});

// Происходит когда очищается список столбцов.
Table.on('TableColumnCollectionClearing', (e) => {
    console.log(e.Columns);
});
```