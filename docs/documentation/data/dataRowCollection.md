# DataRowCollection
Представляет коллекцию объектов [DataRow](./dataRow.md) для объекта [DataTable](./dataTable.md).

## Инициализация
```js
const Data = require('proglib').Data;
const DataRowCollection = Data.DataRowCollection;

// Инициализирует новый экземпляр класса DataRowCollection.
let _collection = new DataRowCollection();
```

## Свойства
```js
// Возвращает данные объекта DataRowCollection в двумерном массиве.
// 
// Возврат:
//    any[][]
_collection.Data;

// Возвращает общее число объектов DataRow в коллекции.
// 
// Возврат:
//    Number
_collection.Count;
```

## Методы
```js
// Создает строку с использованием заданных параметров и добавляет его в DataRowCollection.
// 
// Параметры:
//    Values
//       Массив объектов, который используется для создания новой строки.
_collection.Add(...Values);

// Получает индекс указанного объекта DataRow.
// 
// Параметры:
//    Row
//       Объект DataRow, который требуется найти.
_collection.IndexOf(Row);

// Вставляет новую строку в коллекцию в указанное положение.
// 
// Параметры:
//    Index
//       Расположение в коллекции, куда необходимо добавить строку DataRow.
// 
//    Row
//       Добавляемый объект DataRow.
_collection.InsertAt(Index, Row);

// Удаляет указанный объект `DataRow` из коллекции.
// 
// Параметры:
//    Row
//       Удаляемый объект DataRow.
_collection.Remove(Row);

// Удаляет строку с указанным индексом из коллекции.
// 
// Параметры:
//    Index
//       Индекс строки для удаления.
_collection.RemoveAt(Index);

// Удаляет колонку с указанным индексом из коллекции.
// 
// Параметры:
//    Index
//       Индекс колонки для удаления.
_collection.RemoveColumn(Index);

// Удаляет все строки из коллекции.
_collection.Clear()

// Возвращает тип для текущего экземпляра.
// 
// Возврат:
//    String
_collection.GetType();
```

## События
```js
// Происходит при добавлении новой строки в коллекцию.
this.rowCollection.on('NewRow', (e) => {
    console.log(e.Index);
    console.log(e.Row);
});

// Происходит перед удалением строки из коллекции.
this.rowCollection.on('RowDeleting', (e) => {
    console.log(e.Index);
    console.log(e.Row);
});

// Происходит после удаления строки из коллекции.
this.rowCollection.on('RowDeleted', () => {
    
});

// Происходит при очистке коллекции.
this.rowCollection.on('RowCollectionClearing', (e) => {
    console.log(e.Rows);
});

// Происходит после очистки коллекции.
this.rowCollection.on('RowCollectionCleared', () => {
    
});
```